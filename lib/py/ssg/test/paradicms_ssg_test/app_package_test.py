from typing import Tuple

from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.model import Model
from paradicms_ssg.app_package import AppPackage

APP = "work-search"


# def test_clean():
#     AppPackage(gui=GUI).clean()


def test_build(synthetic_data_models: Tuple[Model, ...], tmp_path):
    app_package = AppPackage(app=APP)

    if not (app_package.app_dir_path / "node_modules").is_dir():
        # Must have built GUI externally
        return

    app_package.clean()
    assert not (app_package.app_dir_path / "out").exists()

    pipeline_id = "test"
    gui_data_loader = RdfFileLoader(
        rdf_file_path=tmp_path / (pipeline_id + ".trig"), pipeline_id=pipeline_id
    )
    gui_data_loader(flush=True, models=synthetic_data_models)

    app_out_dir_path = app_package.build(
        data_file_path=tmp_path / (pipeline_id + ".trig")
    )
    assert app_out_dir_path == (app_package.app_dir_path / "out")
    assert app_out_dir_path.is_dir()


# def test_install():
#     AppPackage(gui=GUI).install()
