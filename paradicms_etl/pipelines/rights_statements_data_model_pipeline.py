from io import BytesIO
from pathlib import Path
from typing import Dict, Generator
from zipfile import ZipFile

from rdflib import Graph
import rdflib_jsonld

from paradicms_etl._extractor import _Extractor
from paradicms_etl._loader import _Loader
from paradicms_etl._pipeline import _Pipeline
from paradicms_etl._transformer import _Transformer
from paradicms_etl.loaders.nop_loader import NopLoader
from paradicms_etl.models.rights_statement import RightsStatement


class RightsStatementsDataModelPipeline(_Pipeline):
    ID = "rights_statements_data_model"

    class _RightsStatementsDataModelExtractor(_Extractor):
        def extract(self, *, force: bool):
            zip_file_path = self._download(
                "https://github.com/rightsstatements/data-model/archive/refs/heads/master.zip",
                force=force,
            )
            json_ld_file_contents = {}
            with ZipFile(zip_file_path) as zip_file:
                entry_names = tuple(zip_file.namelist())
                for entry_name in entry_names:
                    assert entry_name.startswith("data-model-master/")
                    if not entry_name.endswith("_en.json"):
                        continue
                    graph = Graph()
                    with zip_file.open(entry_name) as zip_file_entry:
                        json_ld_file_contents[entry_name] = zip_file_entry.read()
            return {"json_ld_file_contents": json_ld_file_contents}

    class _RightsStatementsDataModelTransformer(_Transformer):
        def transform(self, json_ld_file_contents: Dict[str, bytes]):
            for json_ld_bytes in json_ld_file_contents.values():
                graph = Graph()
                graph.parse(BytesIO(json_ld_bytes), format="json-ld")
                graph_subjects = tuple(set(graph.subjects()))
                assert len(graph_subjects) == 1, graph_subjects
                uri = graph_subjects[0]
                yield RightsStatement.from_rdf(resource=graph.resource(uri))

    class _RightsStatementsDataModelLoader(_Loader):
        def load(self, *, models: Generator[RightsStatement, None, None]):
            rights_statements_py_file_path = (
                Path(__file__).parent.parent / "models" / "rights_statements.py"
            )
            rights_statement_reprs = "\n".join(
                repr(rights_statement) for rights_statement in models
            )
            with open(
                rights_statements_py_file_path, "w+", encoding="utf-8"
            ) as rights_statements_py_file:
                rights_statements_py_file.write(
                    f"""\
# -*- coding: utf-8 -*-
                    
import rdflib.term
from paradicms_etl.models.rights_statement import RightsStatement


{rights_statement_reprs}
"""
                )

    def __init__(self, **kwds):
        _Pipeline.__init__(
            self,
            extractor=self._RightsStatementsDataModelExtractor(
                pipeline_id=self.ID, **kwds
            ),
            id=self.ID,
            loader=self._RightsStatementsDataModelLoader(pipeline_id=self.ID, **kwds),
            transformer=self._RightsStatementsDataModelTransformer(
                pipeline_id=self.ID, **kwds
            ),
            **kwds,
        )


if __name__ == "__main__":
    RightsStatementsDataModelPipeline.main()
