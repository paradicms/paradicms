import logging
from io import BytesIO
from pathlib import Path
from tempfile import TemporaryDirectory
from typing import Dict, Iterable
from zipfile import ZipFile

from rdflib import Graph, Literal, Namespace

from paradicms_etl.model import Model
from paradicms_etl.models.cms.cms_license import CmsLicense
from paradicms_etl.models.license import License
from paradicms_etl.namespaces import bind_namespaces
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.utils.download_file import download_file


class CreativeCommonsPipeline(Pipeline):
    ID = "creative_commons"

    def __init__(self, **kwds):
        Pipeline.__init__(
            self,
            extractor=self.__extract,
            id=self.ID,
            loader=self.__load,
            transformer=self.__transform,
            **kwds,
        )
        self.__logger = logging.getLogger(__name__)

    @staticmethod
    def __extract(*, force: bool, **kwds):
        with TemporaryDirectory() as temp_dir:
            zip_file_path = download_file(
                force=force,
                from_url="https://github.com/creativecommons/cc.licenserdf/archive/refs/heads/main.zip",
                to_dir_path=Path(temp_dir),
            )
            rdf_file_contents = {}
            with ZipFile(zip_file_path) as zip_file:
                entry_names = tuple(zip_file.namelist())
                ENTRY_NAME_PREFIX = "cc.licenserdf-main/cc/licenserdf/licenses/"
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

    @staticmethod
    def __load(*, models: Iterable[Model], **kwds):
        creative_commons_licenses_py_file_path = (
            Path(__file__).parent.parent / "models" / "creative_commons_licenses.py"
        )
        py_license_identifiers = set()
        py_license_reprs = []
        for license in models:
            assert isinstance(license, License)
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
                f"    {py_license_identifier} = _MODEL_CLASS.from_rdf(Graph().parse(data=r'''{en_license_graph.serialize(format='ttl')}''', format='ttl').resource(URIRef('{license.uri}')))"  # type: ignore
            )
        py_license_reprs_joined = "\n".join(py_license_reprs)

        with open(
            creative_commons_licenses_py_file_path, "w+", encoding="utf-8"
        ) as licenses_py_file:
            licenses_py_file.write(
                f"""\
# -*- coding: utf-8 -*-

from rdflib import Graph, URIRef
from paradicms_etl.models.cms.cms_license import CmsLicense
from paradicms_etl.models.model_singletons import ModelSingletons


class CreativeCommonsLicenses(ModelSingletons):
    _MODEL_CLASS = CmsLicense

{py_license_reprs_joined}
"""
            )

    def __transform(self, *, rdf_file_contents: Dict[str, bytes]):  # type: ignore
        CC = Namespace("http://creativecommons.org/ns#")
        for rdf_file_name, rdf_file_bytes in rdf_file_contents.items():
            graph = Graph()
            graph.parse(BytesIO(rdf_file_bytes), format="xml")
            graph_subjects = tuple(set(graph.subjects()))
            if len(graph_subjects) > 1:
                self.__logger.debug(
                    "skipping .rdf with more than one subject %s", rdf_file_name
                )
                continue  # Only jurisdictional licenses
            uri = graph_subjects[0]
            if graph.value(uri, CC["jurisdiction"]) is not None:
                self.__logger.debug("skipping .rdf with jurisdiction %s", rdf_file_name)
                continue
            yield CmsLicense.from_rdf(graph.resource(uri))


if __name__ == "__main__":
    CreativeCommonsPipeline.main()
