from paradicms_etl.extractors.excel_2010_extractor import Excel2010Extractor


def test_extract(excel_2010_test_data_file_path):
    results = Excel2010Extractor(xlsx_file_path=excel_2010_test_data_file_path)(
        force=False
    )
    assert len(results) == 1
    sheets = results["sheets"]
    assert len(sheets) == 1
    sheet = sheets["Person"]
    rows = sheet["rows"]
    assert len(rows) == 2
    header_row = rows[0]
    assert header_row == ("@id", "familyName", "givenName", "name")
