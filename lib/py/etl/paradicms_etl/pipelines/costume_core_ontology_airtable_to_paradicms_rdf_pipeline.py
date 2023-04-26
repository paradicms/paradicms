from pathlib import Path
from typing import Optional

from configargparse import ArgParser

from paradicms_etl.extractors.costume_core_ontology_airtable_extractor import (
    CostumeCoreOntologyAirtableExtractor,
)
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.models.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.costume_core_ontology_airtable_transformer import (
    CostumeCoreOntologyAirtableTransformer,
)


class CostumeCoreOntologyAirtableToParadicmsRdfPipeline(Pipeline):
    ID = "costume_core_ontology"

    def __init__(
        self, *, airtable_access_token: str, data_dir_path: Optional[Path] = None
    ):
        if data_dir_path is None:
            data_dir_path = self.__find_data_dir_path()

        Pipeline.__init__(
            self,
            extractor=CostumeCoreOntologyAirtableExtractor(
                access_token=airtable_access_token,
                cache_dir_path=self._cache_dir_path(
                    data_dir_path=data_dir_path, pipeline_id=self.ID
                )
                / "airtable",
            ),
            id=self.ID,
            loader=lambda *, models, **kwds: RdfFileLoader(
                rdf_file_path=data_dir_path
                / self.ID
                / "loaded"
                / "costume_core_ontology_paradicms.ttl",
                format="ttl",
            )(
                models=(
                    model
                    for model in models
                    if not isinstance(
                        model,
                        (
                            CostumeCoreOntology,
                            CostumeCoreOntology.Predicate,
                            CostumeCoreOntology.Term,
                        ),
                    )
                ),
                **kwds
            ),
            transformer=CostumeCoreOntologyAirtableTransformer(),
        )

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser):
        Pipeline.add_arguments(arg_parser)
        arg_parser.add_argument("--airtable-access-token", required=True)

    @staticmethod
    def __find_data_dir_path() -> Path:
        for data_dir_path in (
            Path("/paradicms/data"),
            Path(__file__).parent.parent.parent.parent.parent.parent / "data",
        ):
            if data_dir_path.is_dir():
                return data_dir_path
        raise NotImplementedError("unable to find data dir path")


if __name__ == "__main__":
    CostumeCoreOntologyAirtableToParadicmsRdfPipeline.main()
