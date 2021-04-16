from io import BytesIO
from typing import Dict
from zipfile import ZipFile

from rdflib import Graph
import rdflib_jsonld

from paradicms_etl._extractor import _Extractor
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
                model = RightsStatement.from_rdf(resource=graph.resource(uri))
                print(repr(model))
                yield model

    def __init__(self, **kwds):
        _Pipeline.__init__(
            self,
            extractor=self._RightsStatementsDataModelExtractor(
                pipeline_id=self.ID, **kwds
            ),
            id=self.ID,
            loader=NopLoader(pipeline_id=self.ID, **kwds),
            transformer=self._RightsStatementsDataModelTransformer(
                pipeline_id=self.ID, **kwds
            ),
            **kwds
        )


if __name__ == "__main__":
    RightsStatementsDataModelPipeline.main()
