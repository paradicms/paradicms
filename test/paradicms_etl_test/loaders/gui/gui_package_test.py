from pathlib import Path
from typing import Tuple

from paradicms_etl._model import _Model
from paradicms_etl.loaders.gui.gui_package import GuiPackage
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader

GUI = "material-ui-union"


# def test_clean():
#     GuiPackage(gui=GUI).clean()


def test_build(test_data_models: Tuple[_Model, ...], tmp_path):
    gui_package = GuiPackage(gui=GUI)

    if not (gui_package.gui_dir_path / "node_modules").is_dir():
        # Must have built GUI externally
        return

    gui_package.clean()
    assert not (gui_package.gui_dir_path / "out").exists()

    pipeline_id = "test"
    gui_data_loader = RdfFileLoader(
        loaded_data_dir_path=Path(tmp_path), pipeline_id=pipeline_id
    )
    gui_data_loader.load(models=test_data_models)
    gui_data_loader.flush()

    gui_out_dir_path = gui_package.build(
        data_ttl_file_path=Path(tmp_path) / (pipeline_id + ".ttl")
    )
    assert gui_out_dir_path == (gui_package.gui_dir_path / "out")
    assert gui_out_dir_path.is_dir()


# def test_install():
#     GuiPackage(gui=GUI).install()
