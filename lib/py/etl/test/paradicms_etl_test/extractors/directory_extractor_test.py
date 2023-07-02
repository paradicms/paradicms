from pathlib import Path

from paradicms_etl.extractors.directory_extractor import (
    DirectoryExtractor,
)


def test_extract(data_dir_path: Path):
    result = DirectoryExtractor(directory_path=data_dir_path / "test" / "directory")(
        force=False
    )
    assert result["directory_name"] == "directory"
    assert len(result["image_file_entries"]) == 1
    assert len(result["metadata_file_entries"]) == 5
