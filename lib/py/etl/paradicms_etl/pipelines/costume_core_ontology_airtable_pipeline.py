from pathlib import Path

from paradicms_etl.extractors.costume_core_ontology_airtable_extractor import (
    CostumeCoreOntologyAirtableExtractor,
)
from paradicms_etl.loader import Loader
from paradicms_etl.model import Model
from paradicms_etl.models.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.namespaces import COCO
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.costume_core_ontology_airtable_transformer import (
    CostumeCoreOntologyAirtableTransformer,
)


def is_costume_core_ontology_model(model: Model) -> bool:
    return isinstance(
        model,
        CostumeCoreOntology | CostumeCoreOntology.Predicate | CostumeCoreOntology.Term,
    ) and str(model.uri).startswith(str(COCO)[:-1])


class CostumeCoreOntologyAirtablePipeline(Pipeline):
    ID = "costume_core_ontology"

    def __init__(
        self,
        *,
        airtable_access_token: str,
        loader: Loader,
        cache_dir_path: Path | None = None,
        ontology_version: str | None = None,
    ):
        if cache_dir_path is None:
            data_dir_path = self._find_data_dir_path()
            if cache_dir_path is None:
                cache_dir_path = self._cache_dir_path(
                    data_dir_path=data_dir_path, pipeline_id=self.ID
                )

        Pipeline.__init__(
            self,
            extractor=CostumeCoreOntologyAirtableExtractor(
                access_token=airtable_access_token,
                cache_dir_path=cache_dir_path / "airtable",
            ),
            id=self.ID,
            loader=loader,
            transformer=CostumeCoreOntologyAirtableTransformer(
                ontology_version=ontology_version
            ),
        )

    @staticmethod
    def _find_data_dir_path() -> Path:
        for data_dir_path in (
            Path("/paradicms/data"),
            Path(__file__).parent.parent.parent.parent.parent.parent / "data",
        ):
            if data_dir_path.is_dir():
                return data_dir_path
        raise NotImplementedError("unable to find data dir path")
