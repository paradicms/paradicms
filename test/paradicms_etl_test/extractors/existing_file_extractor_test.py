from pathlib import Path
from tempfile import TemporaryDirectory

from paradicms_etl.extractors.existing_file_extractor import ExistingFileExtractor


def test_extract_file_name():
    with TemporaryDirectory() as temp_dir:
        file_name = "test.txt"
        file_path = Path(temp_dir) / file_name
        file_path.touch()
        sut = ExistingFileExtractor(
            extracted_data_dir_path=Path(temp_dir),
            file_name=file_name,
            pipeline_id="test",
        )
        assert sut.extract() == {"file_path": file_path}


def test_extract_file_path():
    assert ExistingFileExtractor(
        file_path=Path(__file__), pipeline_id="test"
    ).extract() == {"file_path": Path(__file__)}
