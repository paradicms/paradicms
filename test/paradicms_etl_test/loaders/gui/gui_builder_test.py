from pathlib import Path
from typing import Tuple

from paradicms_etl._model import _Model
from paradicms_etl.loaders.gui.gui_builder import GuiBuilder
from paradicms_etl.loaders.gui.gui_data_loader import GuiDataLoader

GUI = "material-ui-union"


# def test_clean():
#     GuiBuilder(gui=GUI).clean()


def test_build(test_data_models: Tuple[_Model, ...], tmp_path):
    gui_builder = GuiBuilder(gui=GUI)

    if not (gui_builder.gui_dir_path / "node_modules").is_dir():
        # Must have built GUI externally
        return

    gui_builder.clean()
    assert not (gui_builder.gui_dir_path / "out").exists()

    gui_data_loader = GuiDataLoader(
        loaded_data_dir_path=Path(tmp_path), pipeline_id="test"
    )
    gui_data_loader.load(models=test_data_models)
    gui_data_loader.flush()

    gui_out_dir_path = gui_builder.build(data_dir_path=Path(tmp_path))
    assert gui_out_dir_path == (gui_builder.gui_dir_path / "out")
    assert gui_out_dir_path.is_dir()


# def test_install():
#     GuiBuilder(gui=GUI).install()
