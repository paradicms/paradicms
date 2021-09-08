from io import BytesIO
from pathlib import Path
from typing import Dict, Generator
from zipfile import ZipFile

from rdflib import DCTERMS, Graph, Literal, SKOS, URIRef
from rdflib.resource import Resource

from paradicms_etl._extractor import _Extractor
from paradicms_etl._loader import _Loader
from paradicms_etl._pipeline import _Pipeline
from paradicms_etl._transformer import _Transformer
from paradicms_etl.models.rights_statement import RightsStatement


class RightsStatementsDotOrgPipeline(_Pipeline):
    ID = "rights_statements_dot_org"

    class _RightsStatementsDotOrgExtractor(_Extractor):
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

    class _RightsStatementsDotOrgTransformer(_Transformer):
        def __rights_statement_from_rdf(self, identifier: str, resource: Resource):
            definition_literal = resource.value(SKOS.definition, any=False)
            definition = (
                definition_literal.value
                if isinstance(definition_literal, Literal)
                else None
            )

            description_literal = resource.value(DCTERMS.description, any=False)
            description = (
                description_literal.value
                if isinstance(description_literal, Literal)
                else None
            )

            pref_label_literal = resource.value(SKOS.prefLabel, any=False)
            if not isinstance(pref_label_literal, Literal):
                raise ValueError("rights statement must have literal skos:prefLabel")
            pref_label = pref_label_literal.value

            notes = []
            for note_literal in resource.objects(SKOS.note):
                if isinstance(note_literal, Literal):
                    notes.append(note_literal.value)

            scope_note_literal = resource.value(SKOS.scopeNote, any=False)
            scope_note = (
                scope_note_literal.value
                if isinstance(scope_note_literal, Literal)
                else None
            )

            assert isinstance(resource.identifier, URIRef)

            return RightsStatement.from_fields(
                definition=definition,
                description=description,
                identifier=identifier,
                pref_label=pref_label,
                notes=tuple(notes),
                scope_note=scope_note,
                uri=resource.identifier,
            )

        def transform(self, json_ld_file_contents: Dict[str, bytes]):
            for entry_id, json_ld_bytes in json_ld_file_contents.items():
                graph = Graph()
                graph.parse(BytesIO(json_ld_bytes), format="json-ld")
                graph_subjects = tuple(set(graph.subjects()))
                assert len(graph_subjects) == 1, graph_subjects
                uri = graph_subjects[0]
                yield self.__rights_statement_from_rdf(
                    identifier=entry_id, resource=graph.resource(uri)
                )

    class _RightsStatementsDotOrgLoader(_Loader):
        def load(self, *, models: Generator[RightsStatement, None, None]):
            rights_statements_py_file_path = (
                Path(__file__).parent.parent
                / "models"
                / "rights_statements_dot_org_rights_statements.py"
            )
            rights_statement_reprs = "\n\n".join(
                f"    {rights_statement.identifier.replace('-', '_')} = {repr(rights_statement)}"
                for rights_statement in models
            )
            with open(
                rights_statements_py_file_path, "w+", encoding="utf-8"
            ) as rights_statements_py_file:
                rights_statements_py_file.write(
                    f"""\
# -*- coding: utf-8 -*-

from typing import Tuple

import rdflib.term
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models._model_singletons import _ModelSingletons


class RightsStatementsDotOrgRightsStatements(_ModelSingletons):
    _MODEL_CLASS = RightsStatement

{rights_statement_reprs}
"""
                )

    def __init__(self, **kwds):
        _Pipeline.__init__(
            self,
            extractor=self._RightsStatementsDotOrgExtractor(
                pipeline_id=self.ID, **kwds
            ),
            id=self.ID,
            loader=self._RightsStatementsDotOrgLoader(pipeline_id=self.ID, **kwds),
            transformer=self._RightsStatementsDotOrgTransformer(
                pipeline_id=self.ID, **kwds
            ),
            **kwds,
        )


if __name__ == "__main__":
    RightsStatementsDotOrgPipeline.main()
