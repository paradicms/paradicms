from io import BytesIO
from pathlib import Path
from tempfile import TemporaryDirectory
from typing import Dict, Iterable
from zipfile import ZipFile

from rdflib import DCTERMS, Graph, Literal

from paradicms_etl.model import Model
from paradicms_etl.models.cms.cms_rights_statement import CmsRightsStatement
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.namespaces import bind_namespaces
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.utils.download_file import download_file


class RightsStatementsDotOrgPipeline(Pipeline):
    ID = "rights_statements_dot_org"

    @staticmethod
    def __extract(*, force: bool):
        with TemporaryDirectory() as temp_dir:
            zip_file_path = download_file(
                force=force,
                from_url="https://github.com/rightsstatements/data-model/archive/refs/heads/master.zip",
                to_dir_path=Path(temp_dir),
            )
            json_ld_file_contents = {}
            with ZipFile(zip_file_path) as zip_file:
                entry_names = tuple(zip_file.namelist())
                ENTRY_NAME_PREFIX = "data-model-master/"
                ENTRY_NAME_SUFFIX = "_en.json"
                for entry_name in entry_names:
                    assert entry_name.startswith(ENTRY_NAME_PREFIX)
                    if not entry_name.endswith(ENTRY_NAME_SUFFIX):
                        continue
                    with zip_file.open(entry_name) as zip_file_entry:
                        id_ = entry_name[
                            len(ENTRY_NAME_PREFIX) : -len(ENTRY_NAME_SUFFIX)
                        ]
                        assert id_ not in json_ld_file_contents
                        json_ld_file_contents[id_] = zip_file_entry.read()
            return {"json_ld_file_contents": json_ld_file_contents}

    @staticmethod
    def __load(*, models: Iterable[Model], **kwds):
        rights_statement_reprs = []
        for model in models:
            if isinstance(model, RightsStatement):
                rights_statement = model
                rights_statement_reprs.append(
                    f"    {rights_statement.identifier.replace('-', '_')} = _MODEL_CLASS.from_rdf(Graph().parse(data=r'''{rights_statement.to_rdf(bind_namespaces(Graph())).graph.serialize(format='ttl')}''', format='ttl').resource(URIRef('{rights_statement.uri}')))"
                )
            yield model
        rights_statement_reprs_str = "\n\n".join(rights_statement_reprs)

        with open(
            (
                Path(__file__).parent.parent
                / "models"
                / "rights_statements_dot_org_rights_statements.py"
            ),
            "w+",
            encoding="utf-8",
        ) as rights_statements_py_file:
            rights_statements_py_file.write(
                f"""\
# -*- coding: utf-8 -*-

from rdflib import Graph, URIRef
from paradicms_etl.models.cms.cms_rights_statement import CmsRightsStatement
from paradicms_etl.models.model_singletons import ModelSingletons


class RightsStatementsDotOrgRightsStatements(ModelSingletons):
    _MODEL_CLASS = CmsRightsStatement

{rights_statement_reprs_str}
"""
            )

    @staticmethod
    def __transform(*, json_ld_file_contents: Dict[str, bytes]):  # type: ignore
        for entry_id, json_ld_bytes in json_ld_file_contents.items():
            graph = Graph()
            graph.parse(BytesIO(json_ld_bytes), format="json-ld")
            graph_subjects = tuple(set(graph.subjects()))
            assert len(graph_subjects) == 1, graph_subjects
            uri = graph_subjects[0]
            graph.add((uri, DCTERMS.identifier, Literal(entry_id)))
            yield CmsRightsStatement.from_rdf(graph.resource(uri))

    def __init__(self, **kwds):
        Pipeline.__init__(
            self,
            extractor=self.__extract,
            id=self.ID,
            loader=self.__load,
            transformer=self.__transform,
            **kwds,
        )


if __name__ == "__main__":
    RightsStatementsDotOrgPipeline.main()
