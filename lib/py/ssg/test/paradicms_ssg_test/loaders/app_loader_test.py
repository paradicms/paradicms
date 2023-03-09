import os
from pathlib import Path
from typing import Tuple

import pytest

from paradicms_etl.model import Model
from paradicms_etl.models.image import Image
from paradicms_etl.pipelines.synthetic_data_pipeline import SyntheticDataPipeline
from paradicms_ssg.loaders.app_loader import AppLoader
from .nop_image_archiver import NopImageArchiver


@pytest.mark.parametrize(
    "app", ["multi-page-exhibition", "single-page-exhibition", "work-search"]
)
def test_load(app: str, synthetic_data_models: Tuple[Model, ...], tmp_path):
    app_dir_path = (
        Path(__file__).parent.parent.parent.parent.parent.parent.parent / "app" / app
    )
    assert app_dir_path.is_dir(), app_dir_path

    if not (app_dir_path / "node_modules").is_dir():
        # Must have built GUI externally
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


if False and os.environ.get("CI") is None:

    def test_load_with_test_data(tmp_path):
        SyntheticDataPipeline(
            loader=AppLoader(
                app="collection",
                loaded_data_dir_path=tmp_path,
                pipeline_id=SyntheticDataPipeline.ID,
            ),
        ).extract_transform_load()
        img_file_path = (
            tmp_path
            / "deployed"
            / "current"
            / "img"
            / "archive"
            / "0e9aad43e78386b2fe66dc5269b8cc526c52fc8d9d544112b55e917d6993309d.gif"
        )
        assert img_file_path.is_file(), img_file_path
