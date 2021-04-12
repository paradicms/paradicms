from pathlib import Path

from paradicms_etl.extractors.markdown_directory_extractor import (
    MarkdownDirectoryExtractor,
)

MARKDOWN_DIRECTORY_DATA_DIR_PATH = (
    Path(__file__).absolute().parent.parent.parent.parent
    / "data"
    / "markdown_directory"
)
assert MARKDOWN_DIRECTORY_DATA_DIR_PATH.is_dir(), MARKDOWN_DIRECTORY_DATA_DIR_PATH

TEST_MARKDOWN_DIRECTORY_EXTRACTOR = MarkdownDirectoryExtractor(
    extracted_data_dir_path=MARKDOWN_DIRECTORY_DATA_DIR_PATH / "extracted",
    pipeline_id="test",
)


def test_extract():
    result = TEST_MARKDOWN_DIRECTORY_EXTRACTOR.extract()["markdown"]
    assert len(result["object"]) == 1
    assert "test_object" in result["object"]
    assert len(result["person"]) == 1
    assert "test_person" in result["person"]
