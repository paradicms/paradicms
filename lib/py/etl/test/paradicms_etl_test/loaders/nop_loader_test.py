from pathlib import Path

from paradicms_etl.loaders.nop_loader import nop_loader


def test_load(test_data_models, tmpdir):
    nop_loader(
        loaded_data_dir_path=Path(tmpdir), models=test_data_models, pipeline_id="test"
    )
