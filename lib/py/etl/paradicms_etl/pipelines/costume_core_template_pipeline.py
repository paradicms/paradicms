from pathlib import Path

from paradicms_etl.extractors.costume_core_data_airtable_extractor import (
    CostumeCoreDataAirtableExtractor,
)
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.costume_core_data_airtable_transformer import (
    CostumeCoreDataAirtableTransformer,
)


class CostumeCoreTemplatePipeline(Pipeline):
    __BASE_ID = "appgU92SdGTwPIVNg"
    __ID = "costume_core_template"

    def __init__(self, airtable_access_token: str, data_dir_path: Path):
        Pipeline.__init__(
            self,
            extractor=CostumeCoreDataAirtableExtractor(
                access_token=airtable_access_token,
                base_id=self.__BASE_ID,
                extracted_data_dir_path=self._extracted_data_dir_path(
                    data_dir_path=data_dir_path, pipeline_id=self.__ID
                ),
            ),
            id=self.__ID,
            loader=RdfFileLoader(
                rdf_file_path=data_dir_path
                / self.__ID
                / "loaded"
                / (self.__ID + ".trig"),
                pipeline_id=self.__ID,
            ),
            transformer=CostumeCoreDataAirtableTransformer(),
        )

    @classmethod
    def add_arguments(cls, arg_parser):
        Pipeline.add_arguments(arg_parser)
        cls._add_data_dir_path_argument(arg_parser)
        arg_parser.add_argument("--airtable-access-token", required=True)


if __name__ == "__main__":
    CostumeCoreTemplatePipeline.main()
