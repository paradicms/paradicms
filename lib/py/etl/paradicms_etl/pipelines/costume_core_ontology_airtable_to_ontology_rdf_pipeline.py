from pathlib import Path

from configargparse import ArgParser

from paradicms_etl.extractors.costume_core_ontology_airtable_extractor import (
    CostumeCoreOntologyAirtableExtractor,
)
from paradicms_etl.loaders.composite_loader import CompositeLoader
from paradicms_etl.loaders.costume_core_ontology_py_loader import (
    CostumeCoreOntologyPyLoader,
)
from paradicms_etl.loaders.costume_core_ontology_rdf_file_loader import (
    CostumeCoreOntologyRdfFileLoader,
)
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.costume_core_ontology_airtable_to_costume_core_models_transformer import (
    CostumeCoreOntologyAirtableToCostumeCoreModelsTransformer,
)


class CostumeCoreOntologyAirtableToOntologyRdfPipeline(Pipeline):
    ID = "costume_core_ontology"

    def __init__(
        self,
        *,
        airtable_access_token: str,
        data_dir_path: Path,
        ontology_version: str,
    ):
        Pipeline.__init__(
            self,
            extractor=CostumeCoreOntologyAirtableExtractor(
                access_token=airtable_access_token,
                extracted_data_dir_path=data_dir_path / self.ID / "extracted",
            ),
            id=self.ID,
            loader=CompositeLoader(
                loaders=(
                    CostumeCoreOntologyPyLoader(),
                    CostumeCoreOntologyRdfFileLoader(
                        format="ttl",
                        pipeline_id=self.ID,
                        rdf_file_path=data_dir_path
                        / self.ID
                        / "loaded"
                        / "costume_core_ontology.ttl",
                    ),
                    CostumeCoreOntologyRdfFileLoader(
                        format="xml",
                        pipeline_id=self.ID,
                        rdf_file_path=data_dir_path
                        / self.ID
                        / "loaded"
                        / "costume_core_ontology.xml",
                    ),
                ),
            ),
            transformer=CostumeCoreOntologyAirtableToCostumeCoreModelsTransformer(  # type: ignore
                ontology_version=ontology_version
            ),
        )

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser):
        Pipeline.add_arguments(arg_parser)
        cls._add_data_dir_path_argument(arg_parser)
        arg_parser.add_argument("--airtable-access-token", required=True)
        arg_parser.add_argument("--ontology-version", required=True)


if __name__ == "__main__":
    CostumeCoreOntologyAirtableToOntologyRdfPipeline.main()
