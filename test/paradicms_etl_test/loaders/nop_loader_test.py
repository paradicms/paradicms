from pathlib import Path

from paradicms_etl.loaders.nop_loader import NopLoader


def test_load(test_data_models, tmpdir):
    loader = NopLoader(data_dir_path=Path(tmpdir), pipeline_id="test")
    loader.load(models=test_data_models)
