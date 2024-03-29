from typing import Tuple

from more_itertools import consume

from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.model import Model
from paradicms_ssg.app_package import AppPackage

APP = "work-search"


def test_clean_build_export(synthetic_data_models: Tuple[Model, ...], tmp_path):
    app_package = AppPackage(app=APP)

    if not (app_package.app_dir_path / "node_modules").is_dir():
        # Must have built GUI externally
        return

    app_package.clean()
    assert not (app_package.app_dir_path / "out").exists()

    pipeline_id = "test"
    gui_data_loader = RdfFileLoader(rdf_file_path=tmp_path / (pipeline_id + ".trig"))
    consume(gui_data_loader(flush=True, models=synthetic_data_models))

    app_package.build(data_file_paths=(tmp_path / (pipeline_id + ".trig"),))

    app_out_dir_path = app_package.export()
    assert app_out_dir_path == (app_package.app_dir_path / "out")
    assert app_out_dir_path.is_dir()
