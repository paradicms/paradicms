from pathlib import Path
from typing import Tuple

import pytest

from paradicms_etl._model import _Model
from paradicms_etl.loaders.gui.gui_loader import GuiLoader
from paradicms_etl.models._image import _Image
from .nop_image_archiver import NopImageArchiver


@pytest.mark.parametrize("gui", ["bootstrap-collection", "material-ui-union"])
def test_load(gui: str, test_data_models: Tuple[_Model, ...], tmp_path):
    gui_dir_path = (
        Path(__file__).parent.parent.parent.parent.parent.parent / "gui" / "app" / gui
    )
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
        if isinstance(model, _Image):
            image = model
            if image.original_image_uri is None:
                original_images.append(image)
        else:
            other_models.append(model)

    # Only pass in one original image so the test doesn't take too long
    gui_loader.load(models=[original_images[0]] + other_models)
    gui_loader.flush()

    assert (loaded_data_dir_path / "data" / "test.ttl").is_file()
    assert (loaded_data_dir_path / "deployed" / "current" / "index.html").is_file()
