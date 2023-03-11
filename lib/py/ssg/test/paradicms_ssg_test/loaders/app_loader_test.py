from pathlib import Path
from typing import Tuple

import pytest

from paradicms_etl.extractors.excel_2010_extractor import Excel2010Extractor
from paradicms_etl.model import Model
from paradicms_etl.models.image import Image
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.pipelines.synthetic_data_pipeline import SyntheticDataPipeline
from paradicms_etl.transformers.spreadsheet_transformer import SpreadsheetTransformer
from paradicms_ssg.loaders.app_loader import AppLoader
from .nop_image_archiver import NopImageArchiver


def _app_ready(app: str) -> bool:
    app_dir_path = (
        Path(__file__).parent.parent.parent.parent.parent.parent.parent / "app" / app
    )
    assert app_dir_path.is_dir(), app_dir_path

    return (app_dir_path / "node_modules").is_dir()


@pytest.mark.parametrize(
    "app", ["multi-page-exhibition", "single-page-exhibition", "work-search"]
)
def test_load_minimal(app: str, synthetic_data_models: Tuple[Model, ...], tmp_path):
    if not _app_ready(app):
        return

    loaded_data_dir_path = tmp_path

    app_loader = AppLoader(
        app=app,
        image_archiver=NopImageArchiver(),
        loaded_data_dir_path=loaded_data_dir_path,
        pipeline_id=SyntheticDataPipeline.ID,
    )

    original_images = []
    other_models = []
    for model in synthetic_data_models:
        if isinstance(model, Image):
            image = model
            if image.original_image_uri is None:
                original_images.append(image)
        else:
            other_models.append(model)

    # Only pass in one original image so the test doesn't take too long
    app_loader(flush=True, models=[original_images[0]] + other_models)

    assert (
        loaded_data_dir_path / "data" / f"{SyntheticDataPipeline.ID}.trig"
    ).is_file()
    assert (loaded_data_dir_path / "deployed" / "index.html").is_file()


# @pytest.mark.parametrize(
#     "app", ["multi-page-exhibition", "single-page-exhibition", "work-search"]
# )
# @pytest.mark.skipif("CI" in os.environ, reason="don't load with full synthetic dataset")
# def test_load_with_synthetic_data(app: str, tmp_path: Path):
#     SyntheticDataPipeline(
#         loader=AppLoader(
#             app=app,
#             loaded_data_dir_path=tmp_path,
#             pipeline_id=SyntheticDataPipeline.ID,
#         ),
#     ).extract_transform_load()
#     img_file_path = (
#         tmp_path
#         / "deployed"
#         / "current"
#         / "img"
#         / "archive"
#         / "0e9aad43e78386b2fe66dc5269b8cc526c52fc8d9d544112b55e917d6993309d.gif"
#     )
#     assert img_file_path.is_file(), img_file_path


@pytest.mark.parametrize(
    "app", ["multi-page-exhibition", "single-page-exhibition", "work-search"]
)
def test_load_excel_2010_test_data(
    app: str, excel_2010_test_data_file_path, tmp_path: Path
):
    if not _app_ready(app):
        pass

    loaded_data_dir_path = tmp_path

    pipeline_id = "test"
    Pipeline(
        extractor=Excel2010Extractor(
            xlsx_file_path=excel_2010_test_data_file_path,
        ),
        id=pipeline_id,
        loader=AppLoader(
            app=app,
            image_archiver=NopImageArchiver(),
            loaded_data_dir_path=loaded_data_dir_path,
            pipeline_id=SyntheticDataPipeline.ID,
        ),
        transformer=SpreadsheetTransformer(pipeline_id=pipeline_id),
    ).extract_transform_load()
