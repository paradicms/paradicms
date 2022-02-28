from io import BytesIO
from pathlib import Path
from typing import Dict, Generator
from zipfile import ZipFile

from rdflib import DCTERMS, Graph, Literal

from paradicms_etl.extractor import Extractor
from paradicms_etl.loader import Loader
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.namespaces import bind_namespaces
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformer import Transformer


class RightsStatementsDotOrgPipeline(Pipeline):
    ID = "rights_statements_dot_org"

    class __RightsStatementsDotOrgExtractor(Extractor):
        def extract(self, *, force: bool):
            zip_file_path = self._download(
                "https://github.com/rightsstatements/data-model/archive/refs/heads/master.zip",
                force=force,
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

    class __RightsStatementsDotOrgTransformer(Transformer):
        def transform(self, json_ld_file_contents: Dict[str, bytes]):
            for entry_id, json_ld_bytes in json_ld_file_contents.items():
                graph = Graph()
                graph.parse(BytesIO(json_ld_bytes), format="json-ld")
                graph_subjects = tuple(set(graph.subjects()))
                assert len(graph_subjects) == 1, graph_subjects
                uri = graph_subjects[0]
                graph.add((uri, DCTERMS.identifier, Literal(entry_id)))
                yield RightsStatement.from_rdf(graph.resource(uri))

    class __RightsStatementsDotOrgLoader(Loader):
        def load(self, *, models: Generator[RightsStatement, None, None]):
            rights_statements_py_file_path = (
                Path(__file__).parent.parent
                / "models"
                / "rights_statements_dot_org_rights_statements.py"
            )
            rights_statement_reprs = "\n\n".join(
                f"    {rights_statement.identifier.replace('-', '_')} = RightsStatement.from_rdf(Graph().parse(data=r'''{rights_statement.to_rdf(bind_namespaces(Graph())).graph.serialize(format='ttl').decode('utf-8')}''', format='ttl').resource(URIRef('{rights_statement.uri}')))"
                for rights_statement in models
            )
            with open(
                rights_statements_py_file_path, "w+", encoding="utf-8"
            ) as rights_statements_py_file:
                rights_statements_py_file.write(
                    f"""\
# -*- coding: utf-8 -*-

from rdflib import Graph, URIRef
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.model_singletons import ModelSingletons


class RightsStatementsDotOrgRightsStatements(ModelSingletons):
    _MODEL_CLASS = RightsStatement

{rights_statement_reprs}
"""
                )

    def __init__(self, **kwds):
        Pipeline.__init__(
            self,
            extractor=self.__RightsStatementsDotOrgExtractor(
                pipeline_id=self.ID, **kwds
            ),
            id=self.ID,
            loader=self.__RightsStatementsDotOrgLoader(pipeline_id=self.ID, **kwds),
            transformer=self.__RightsStatementsDotOrgTransformer(
                pipeline_id=self.ID, **kwds
            ),
            **kwds,
        )


if __name__ == "__main__":
    RightsStatementsDotOrgPipeline.main()
