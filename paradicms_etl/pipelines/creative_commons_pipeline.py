from io import BytesIO
from pathlib import Path
from typing import Dict, Generator
from zipfile import ZipFile

from rdflib import DC, DCTERMS, Graph, Literal, Namespace
import rdflib_jsonld
from rdflib.resource import Resource

from paradicms_etl._extractor import _Extractor
from paradicms_etl._loader import _Loader
from paradicms_etl._pipeline import _Pipeline
from paradicms_etl._transformer import _Transformer
from paradicms_etl.loaders.nop_loader import NopLoader
from paradicms_etl.models.license import License
from paradicms_etl.models.rights_statement import RightsStatement


class CreativeCommonsPipeline(_Pipeline):
    ID = "creative_commons"

    class _CreativeCommonsExtractor(_Extractor):
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

    class _CreativeCommonsTransformer(_Transformer):
        def __license_from_rdf(self, resource: Resource) -> License:
            # <cc:License rdf:about="http://creativecommons.org/licenses/BSD/">
            # <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"/>
            # <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"/>
            # <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"/>
            # <cc:legalcode rdf:resource="http://opensource.org/licenses/bsd-license.php"/>
            # <cc:requires rdf:resource="http://creativecommons.org/ns#Notice"/>
            # <cc:licenseClass rdf:resource="http://creativecommons.org/license/software"/>
            # <dc:title>BSD License</dc:title>
            # <dc:identifier>BSD</dc:identifier>
            # </cc:License>

            identifier_literal = resource.value(DCTERMS.identifier, any=False)
            if identifier_literal is None:
                identifier_literal = resource.value(DC.identifier)
            if not isinstance(identifier_literal, Literal):
                raise ValueError("license must have literal dcterms:identifier")
            identifier = identifier_literal.value

            title = None
            for property_ in (DCTERMS.title, DC.title):
                for title_node in resource.objects(property_):
                    if not isinstance(title_node, Literal):
                        continue
                    title_literal = title_node
                    if title_literal.language != "en":
                        continue
                    title = title_literal.value
                    break
                if title is not None:
                    break
            if title is None:
                raise ValueError("license must have literal dcterms:title")

            return License(
                identifier=identifier,
                title=title,
                uri=resource.identifier,
            )

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

                yield self.__license_from_rdf(resource=graph.resource(uri))

    class _CreativeCommonsLoader(_Loader):
        def load(self, *, models: Generator[License, None, None]):
            creative_commons_licenses_py_file_path = (
                Path(__file__).parent.parent / "models" / "creative_commons_licenses.py"
            )
            license_reprs = "\n".join(
                f"    {license.identifier.replace('-', '_').replace('+', '_plus').upper()} = {repr(license)}"
                for license in models
            )
            with open(
                creative_commons_licenses_py_file_path, "w+", encoding="utf-8"
            ) as licenses_py_file:
                licenses_py_file.write(
                    f"""\
# -*- coding: utf-8 -*-

from typing import Tuple

import rdflib.term
from paradicms_etl.models.license import License
from paradicms_etl.models._model_singletons import _ModelSingletons


class CreativeCommonsLicenses(_ModelSingletons):
    _MODEL_CLASS = License

{license_reprs}
"""
                )

    def __init__(self, **kwds):
        _Pipeline.__init__(
            self,
            extractor=self._CreativeCommonsExtractor(pipeline_id=self.ID, **kwds),
            id=self.ID,
            loader=self._CreativeCommonsLoader(pipeline_id=self.ID, **kwds),
            transformer=self._CreativeCommonsTransformer(pipeline_id=self.ID, **kwds),
            **kwds,
        )


if __name__ == "__main__":
    CreativeCommonsPipeline.main()
