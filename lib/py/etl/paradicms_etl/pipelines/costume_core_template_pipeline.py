from pathlib import Path
from typing import Optional

from paradicms_etl.loader import Loader
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.rights import Rights
from paradicms_etl.pipeline import Pipeline
from paradicms_ssg.deployers.s3_deployer import S3Deployer  # type: ignore
from paradicms_ssg.image_archivers.s3_image_archiver import S3ImageArchiver  # type: ignore
from paradicms_ssg.loaders.app_loader import AppLoader  # type: ignore
from rdflib import URIRef

from dressdiscover_etl.extractors.costume_core_data_airtable_extractor import (
    CostumeCoreDataAirtableExtractor,
)
from dressdiscover_etl.transformers.costume_core_data_airtable_transformer import (
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
        **kwds
    ):
        if loader is None:
            loader = AppLoader(
                app="work-search",
                deployer=S3Deployer(
                    cloudfront_distribution_id="E3SAJHD3NNDLWD",
                    s3_bucket_name="costumecoretemplate.dressdiscover.org",
                    **kwds,
                ),
                image_archiver=S3ImageArchiver(
                    s3_bucket_name="dressdiscover-images", **kwds
                ),
                loaded_data_dir_path=data_dir_path / self.__ID / "loaded",
                pipeline_id=self.__ID,
            )

        institution = Institution.from_fields(
            name="Costume Core Template",
            rights=Rights.from_fields(
                holder="Copyright Arden Kirkland. All rights reserved."
            ),
            uri=URIRef("http://www.ardenkirkland.com/costumecore/"),
        )
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
                    institution_uri=institution.uri,
                    title="Costume Core Template Airtable",
                    uri=URIRef("https://airtable.com/" + self.__BASE_ID),
                ),
                institution=institution,
            ),
        )

    @classmethod
    def add_arguments(cls, arg_parser):
        Pipeline.add_arguments(arg_parser)
        cls._add_data_dir_path_argument(arg_parser)
        arg_parser.add_argument("--airtable-access-token", required=True)


if __name__ == "__main__":
    CostumeCoreTemplatePipeline.main()
