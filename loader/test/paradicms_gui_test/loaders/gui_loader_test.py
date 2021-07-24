import os
from pathlib import Path
from typing import Tuple

import pytest
from paradicms_etl._model import _Model
from paradicms_etl.models.image import Image
from paradicms_etl.pipelines.test_data_pipeline import TestDataPipeline

from paradicms_gui.loaders.gui_loader import GuiLoader
from .nop_image_archiver import NopImageArchiver


@pytest.mark.parametrize("gui", ["bootstrap-collection", "material-ui-union"])
def test_load(gui: str, test_data_models: Tuple[_Model, ...], tmp_path):
    gui_dir_path = Path(__file__).parent.parent.parent.parent.parent / "app" / gui
    assert gui_dir_path.is_dir(), gui_dir_path

    if not (gui_dir_path / "node_modules").is_dir():
        # Must have built GUI externally
        return

    loaded_data_dir_path = Path(tmp_path)

    gui_loader = GuiLoader(
        image_archiver=NopImageArchiver(),
        loaded_data_dir_path=loaded_data_dir_path,
        gui=gui,
        pipeline_id="test",
    )

    original_images = []
    other_models = []
    for model in test_data_models:
        if isinstance(model, Image):
            image = model
            if image.original_image_uri is None:
                original_images.append(image)
        else:
            other_models.append(model)

    # Only pass in one original image so the test doesn't take too long
    gui_loader.load(models=[original_images[0]] + other_models)
    gui_loader.flush()

    assert (loaded_data_dir_path / "data" / "test.ttl").is_file()
    assert (loaded_data_dir_path / "deployed" / "index.html").is_file()


if False and os.environ.get("CI") is None:

    def test_load_with_test_data(tmp_path):
        data_dir_path = Path(tmp_path)
        TestDataPipeline(
            collections_per_institution=1,
            data_dir_path=data_dir_path,
            loader=GuiLoader(
                data_dir_path=data_dir_path,
                gui="material-ui-union",
                pipeline_id=TestDataPipeline.ID,
            ),
            images_per_institution=1,
            institutions=1,
            objects_per_institution=1,
        ).extract_transform_load()
        img_file_path = (
            data_dir_path
            / TestDataPipeline.ID
            / "loaded"
            / "deployed"
            / "current"
            / "img"
            / "archive"
            / "0e9aad43e78386b2fe66dc5269b8cc526c52fc8d9d544112b55e917d6993309d.gif"
        )
        assert img_file_path.is_file(), img_file_path
