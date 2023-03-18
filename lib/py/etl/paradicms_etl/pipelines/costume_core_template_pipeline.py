from pathlib import Path
from typing import Optional

from rdflib import URIRef

from paradicms_etl.extractors.costume_core_data_airtable_extractor import (
    CostumeCoreDataAirtableExtractor,
)
from paradicms_etl.loader import Loader
from paradicms_etl.loaders.nop_loader import nop_loader
from paradicms_etl.models.collection import Collection
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.costume_core_data_airtable_transformer import (
    CostumeCoreDataAirtableTransformer,
)


class CostumeCoreTemplatePipeline(Pipeline):
    __BASE_ID = "appgU92SdGTwPIVNg"
    __ID = "costume_core_template"

    def __init__(
        self,
        airtable_access_token: str,
        data_dir_path: Path,
        loader: Optional[Loader] = None,
    ):
        if loader is None:
            # loader = AppLoader(
            #     app="work-search",
            #     deployer=S3Deployer(
            #         cloudfront_distribution_id="E3SAJHD3NNDLWD",
            #         s3_bucket_name="costumecoretemplate.dressdiscover.org",
            #         **kwds,
            #     ),
            #     image_archiver=S3ImageArchiver(
            #         s3_bucket_name="dressdiscover-images", **kwds
            #     ),
            #     loaded_data_dir_path=data_dir_path / self.__ID / "loaded",
            #     pipeline_id=self.__ID,
            # )
            loader = nop_loader

        Pipeline.__init__(
            self,
            extractor=CostumeCoreDataAirtableExtractor(
                access_token=airtable_access_token,
                base_id=self.__BASE_ID,
                extracted_data_dir_path=data_dir_path / self.__ID / "extracted",
            ),
            id=self.__ID,
            loader=loader,
            transformer=CostumeCoreDataAirtableTransformer(
                base_id=self.__BASE_ID,
                collection=Collection.from_fields(
                    title="Costume Core Template Airtable",
                    uri=URIRef("https://airtable.com/" + self.__BASE_ID),
                ),
            ),
        )

    @classmethod
    def add_arguments(cls, arg_parser):
        Pipeline.add_arguments(arg_parser)
        cls._add_data_dir_path_argument(arg_parser)
        arg_parser.add_argument("--airtable-access-token", required=True)


if __name__ == "__main__":
    CostumeCoreTemplatePipeline.main()
