from pathlib import Path

from configargparse import ArgParser

from paradicms_etl.extractors.costume_core_ontology_airtable_extractor import (
    CostumeCoreOntologyAirtableExtractor,
)
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.costume_core_ontology_airtable_to_worksheet_models_transformer import (
    CostumeCoreOntologyAirtableToWorksheetModelsTransformer,
)


class CostumeCoreOntologyAirtableToWorksheetRdfPipeline(Pipeline):
    ID = "costume_core_ontology"

    def __init__(self, *, airtable_access_token: str, data_dir_path: Path):
        Pipeline.__init__(
            self,
            extractor=CostumeCoreOntologyAirtableExtractor(
                access_token=airtable_access_token,
                extracted_data_dir_path=data_dir_path / self.ID / "extracted",
            ),
            id=self.ID,
            loader=RdfFileLoader(
                rdf_file_path=data_dir_path
                / self.ID
                / "loaded"
                / "costume_core_ontology_worksheet.ttl",
                format="ttl",
                pipeline_id=self.ID,
            ),
            transformer=CostumeCoreOntologyAirtableToWorksheetModelsTransformer(),  # type: ignore
        )

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser):
        Pipeline.add_arguments(arg_parser)
        cls._add_data_dir_path_argument(arg_parser)
        arg_parser.add_argument("--airtable-access-token", required=True)


if __name__ == "__main__":
    CostumeCoreOntologyAirtableToWorksheetRdfPipeline.main()
