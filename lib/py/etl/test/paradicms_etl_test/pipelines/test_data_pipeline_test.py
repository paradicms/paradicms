from pathlib import Path

from paradicms_etl.pipelines.test_data_pipeline import TestDataPipeline


def test_extract_transform_load(data_dir_path: Path):
    data_file_path = data_dir_path / "test_data" / "loaded" / "data.trig"
    data_file_path.unlink(missing_ok=True)

    TestDataPipeline().extract_transform_load(force_extract=False)

    assert data_file_path.is_file(), data_file_path
