from io import BytesIO
from pathlib import Path
from typing import Dict, Generator
from zipfile import ZipFile

from rdflib import Graph, Literal, Namespace

from paradicms_etl.extractor import Extractor
from paradicms_etl.loader import Loader
from paradicms_etl.models.license import License
from paradicms_etl.namespaces import bind_namespaces
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformer import Transformer


class CreativeCommonsPipeline(Pipeline):
    ID = "creative_commons"

    class __CreativeCommonsExtractor(Extractor):
        def extract(self, *, force: bool):
            zip_file_path = self._download(
                "https://github.com/creativecommons/cc.licenserdf/archive/refs/heads/master.zip",
                force=force,
            )
            rdf_file_contents = {}
            with ZipFile(zip_file_path) as zip_file:
                entry_names = tuple(zip_file.namelist())
                ENTRY_NAME_PREFIX = "cc.licenserdf-master/cc/licenserdf/licenses/"
                for entry_name in entry_names:
                    if not entry_name.startswith(ENTRY_NAME_PREFIX):
                        continue
                    file_name = entry_name[len(ENTRY_NAME_PREFIX) :]
                    if not file_name:
                        continue
                    if not file_name.endswith(".rdf"):
                        continue
                    with zip_file.open(entry_name) as zip_file_entry:
                        rdf_file_contents[file_name] = zip_file_entry.read()
            return {"rdf_file_contents": rdf_file_contents}

    class __CreativeCommonsTransformer(Transformer):
        def transform(self, rdf_file_contents: Dict[str, bytes]):
            CC = Namespace("http://creativecommons.org/ns#")
            for rdf_file_name, rdf_file_bytes in rdf_file_contents.items():
                graph = Graph()
                graph.parse(BytesIO(rdf_file_bytes), format="xml")
                graph_subjects = tuple(set(graph.subjects()))
                if len(graph_subjects) > 1:
                    self._logger.debug(
                        "skipping .rdf with more than one subject %s", rdf_file_name
                    )
                    continue  # Only jurisdictional licenses
                uri = graph_subjects[0]
                if graph.value(uri, CC["jurisdiction"]) is not None:
                    self._logger.debug(
                        "skipping .rdf with jurisdiction %s", rdf_file_name
                    )
                    continue
                yield License.from_rdf(graph.resource(uri))

    class __CreativeCommonsLoader(Loader):
        def load(self, *, models: Generator[License, None, None]):
            creative_commons_licenses_py_file_path = (
                Path(__file__).parent.parent / "models" / "creative_commons_licenses.py"
            )
            py_license_identifiers = set()
            py_license_reprs = []
            for license in models:
                py_license_identifier = (
                    license.identifier.replace("-", "_").replace("+", "_plus").upper()
                )
                if license.version is not None:
                    py_license_identifier += "_" + license.version.replace(".", "_")
                assert (
                    py_license_identifier not in py_license_identifiers
                ), py_license_identifier
                py_license_identifiers.add(py_license_identifier)

                license_graph = license.to_rdf(Graph()).graph
                en_license_graph = bind_namespaces(Graph())
                for s, p, o in license_graph:
                    if isinstance(o, Literal):
                        if o.language is not None and o.language != "en":
                            continue
                    en_license_graph.add((s, p, o))

                py_license_reprs.append(
                    f"    {py_license_identifier} = License.from_rdf(Graph().parse(data=r'''{en_license_graph.serialize(format='ttl').decode('utf-8')}''', format='ttl').resource(URIRef('{license.uri}')))"
                )
            py_license_reprs = "\n".join(py_license_reprs)

            with open(
                creative_commons_licenses_py_file_path, "w+", encoding="utf-8"
            ) as licenses_py_file:
                licenses_py_file.write(
                    f"""\
# -*- coding: utf-8 -*-

from rdflib import Graph, URIRef
from paradicms_etl.models.license import License
from paradicms_etl.models.model_singletons import ModelSingletons


class CreativeCommonsLicenses(ModelSingletons):
    _MODEL_CLASS = License

{py_license_reprs}
"""
                )

    def __init__(self, **kwds):
        Pipeline.__init__(
            self,
            extractor=self.__CreativeCommonsExtractor(pipeline_id=self.ID, **kwds),
            id=self.ID,
            loader=self.__CreativeCommonsLoader(pipeline_id=self.ID, **kwds),
            transformer=self.__CreativeCommonsTransformer(pipeline_id=self.ID, **kwds),
            **kwds,
        )


if __name__ == "__main__":
    CreativeCommonsPipeline.main()
