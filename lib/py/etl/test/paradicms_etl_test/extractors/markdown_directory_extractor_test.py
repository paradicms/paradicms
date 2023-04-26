from pathlib import Path

from paradicms_etl.extractors.markdown_directory_extractor import (
    MarkdownDirectoryExtractor,
)


def test_extract(data_dir_path: Path):
    result = MarkdownDirectoryExtractor(
        markdown_directory_path=data_dir_path / "test" / "markdown_directory"
    )(force=False)["markdown_directory"]
    assert len(result.image_file_entries) == 3
    assert len(result.metadata_file_entries) == 6
    assert result.name == "markdown_directory"
