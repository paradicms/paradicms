from pathlib import Path

from paradicms_etl.extractors.markdown_directory_extractor import (
    markdown_directory_extractor,
)


def test_extract(data_dir_path: Path):
    result = markdown_directory_extractor(
        extracted_data_dir_path=data_dir_path / "markdown_directory" / "extracted",
        force=False,
        pipeline_id="test",
    )["markdown_directory"]
    assert len(result.image_file_entries) == 3
    assert len(result.metadata_file_entries) == 6
    assert result.name == "extracted"
