import os

import pytest

from paradicms_etl.extractors.google_sheets_extractor import GoogleSheetsExtractor


@pytest.mark.skipif("CI" in os.environ, reason="don't connect to Google Sheets in CI")
def test_extract(google_sheets_spreadsheet_id: str, tmp_path: Path):
    GoogleSheetsExtractor(
        extracted_data_dir_path=tmp_path,
        spreadsheet_id=google_sheets_spreadsheet_id,
    )(force=False)
    file_paths = list(os.walk(tmp_path))
    # Test contents of file in the Excel 2010 extractor test
    assert len(file_paths) == 1
    assert file_paths[0][2][0].endswith(".xlsx")
