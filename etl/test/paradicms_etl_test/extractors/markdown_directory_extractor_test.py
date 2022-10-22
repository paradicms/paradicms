from pathlib import Path

from paradicms_etl.extractors.markdown_directory_extractor import (
    MarkdownDirectoryExtractor,
)


def test_extract(data_dir_path: Path):
    markdown_directory_data_dir_path = data_dir_path / "markdown_directory"
    extractor = MarkdownDirectoryExtractor(
        extracted_data_dir_path=markdown_directory_data_dir_path / "extracted",
        pipeline_id="test",
    )
    result = extractor.extract()["markdown_directory"]
    assert len(result.image_file_entries) == 3
    assert len(result.metadata_file_entries) == 6
    assert result.name == "extracted"
