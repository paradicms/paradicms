from pathlib import Path

import pytest
from more_itertools import consume
from paradicms_etl.extractors.excel_2010_extractor import Excel2010Extractor
from paradicms_etl.model import Model
from paradicms_etl.models.app_configuration import AppConfiguration
from paradicms_etl.models.cms.cms_app_configuration import CmsAppConfiguration
from paradicms_etl.models.image import Image
from paradicms_etl.namespaces import CONFIGURATION
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.pipelines.synthetic_data_pipeline import SyntheticDataPipeline
from paradicms_etl.transformers.spreadsheet_transformer import SpreadsheetTransformer
from paradicms_etl.utils.uuid_urn import uuid_urn
from paradicms_ssg.static_site_generator import StaticSiteGenerator
from rdflib import RDF, Graph, Literal

from .image_archivers.nop_image_archiver import NopImageArchiver


def _app_configuration(app: str) -> AppConfiguration | None:
    app_dir_path = (
        Path(__file__).parent.parent.parent.parent.parent.parent / "app" / app
    )
    assert app_dir_path.is_dir(), app_dir_path
    if not (app_dir_path / "node_modules").is_dir():
        return None

    graph = Graph()
    resource = graph.resource(uuid_urn())
    resource.add(RDF.type, CONFIGURATION.AppConfiguration)
    resource.add(CONFIGURATION.app, Literal(app))
    return CmsAppConfiguration.from_rdf(resource)  # type: ignore


@pytest.mark.parametrize(
    "app", ["multi-page-exhibition", "single-page-exhibition", "work-search"]
)
def test_load_minimal(app: str, synthetic_data_models: tuple[Model, ...], tmp_path):
    app_configuration = _app_configuration(app)
    if app_configuration is None:
        return

    cache_dir_path = tmp_path

    app_loader = StaticSiteGenerator(
        image_archiver=NopImageArchiver(),
        cache_dir_path=cache_dir_path,
    )

    original_images = []
    other_models = [app_configuration]
    for model in synthetic_data_models:
        if isinstance(model, Image):
            image = model
            if image.thumbnail_uris:
                original_images.append(image)
        else:
            other_models.append(model)

    # Only pass in one original image so the test doesn't take too long
    consume(app_loader(flush=True, models=[original_images[0]] + other_models))

    assert (cache_dir_path / "deployment" / "index.html").is_file()


# @pytest.mark.parametrize(
#     "app", ["multi-page-exhibition", "single-page-exhibition", "work-search"]
# )
# @pytest.mark.skipif("CI" in os.environ, reason="don't load with full synthetic dataset")
# def test_load_with_synthetic_data(app: str, tmp_path: Path):
#     SyntheticDataPipeline(
#         loader=AppLoader(
#             app=app,
#             cache_dir_path=tmp_path,
#             pipeline_id=SyntheticDataPipeline.ID,
#         ),
#     ).extract_transform_load()
#     img_file_path = (
#         tmp_path
#         / "deployment"
#         / "current"
#         / "img"
#         / "archive"
#         / "0e9aad43e78386b2fe66dc5269b8cc526c52fc8d9d544112b55e917d6993309d.gif"
#     )
#     assert img_file_path.is_file(), img_file_path


@pytest.mark.parametrize("app", ["work-search"])
def test_load_excel_2010_test_data(
    app: str, excel_2010_test_data_file_path, tmp_path: Path
):
    app_configuration = _app_configuration(app)
    if app_configuration is None:
        return

    cache_dir_path = tmp_path

    pipeline_id = "test"
    consume(
        Pipeline(
            extractor=Excel2010Extractor(
                xlsx_file_path=excel_2010_test_data_file_path,
            ),
            id=pipeline_id,
            loader=StaticSiteGenerator(
                image_archiver=NopImageArchiver(),
                cache_dir_path=cache_dir_path,
            ),
            transformer=SpreadsheetTransformer(pipeline_id=pipeline_id),
        )()
    )
