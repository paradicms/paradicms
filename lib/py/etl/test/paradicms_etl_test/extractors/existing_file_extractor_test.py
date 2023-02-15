from pathlib import Path

from paradicms_etl.extractors.existing_file_extractor import ExistingFileExtractor


def test_extract_file_path():
    assert ExistingFileExtractor(
        file_path=Path(__file__),
    )() == {"file_path": Path(__file__)}
