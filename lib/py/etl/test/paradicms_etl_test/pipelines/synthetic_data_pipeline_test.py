from pathlib import Path

from paradicms_etl.pipelines.synthetic_data_pipeline import SyntheticDataPipeline


def test_extract_transform_load(data_dir_path: Path):
    data_file_path = data_dir_path / "synthetic" / "synthetic_data.trig"
    data_file_path.unlink(missing_ok=True)

    SyntheticDataPipeline().extract_transform_load(force_extract=False)

    assert data_file_path.is_file(), data_file_path
