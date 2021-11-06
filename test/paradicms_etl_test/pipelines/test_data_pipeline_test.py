from pathlib import Path

from paradicms_etl.pipelines.test_data_pipeline import TestDataPipeline


def test_extract_transform_load():
    root_dir_path = Path(__file__).absolute().parent.parent.parent.parent
    data_file_path = root_dir_path / "data" / "test_data" / "loaded" / "data.trig"
    data_file_path.unlink(missing_ok=True)

    TestDataPipeline().extract_transform_load(force_extract=False)

    assert data_file_path.is_file(), data_file_path
