from PIL.Image import Image

from paradicms_etl.extractors.excel_2010_extractor import Excel2010Extractor


def test_extract(excel_2010_test_data_file_path):
    results = Excel2010Extractor(xlsx_file_path=excel_2010_test_data_file_path)(
        force=False
    )
    assert len(results) == 1
    sheets = results["sheets"]
    assert len(sheets) == 2

    person_sheet = sheets["Person"]
    person_rows = person_sheet["rows"]
    assert len(person_rows) == 2
    person_header_row = person_rows[0]
    assert person_header_row == ("@id", "familyName", "givenName", "name")

    image_sheet = sheets["Image"]
    image_rows = image_sheet["rows"]
    assert len(image_rows) == 2
    image_header_row = image_rows[0]
    assert image_header_row == (None, "depicts", "src")
    image_data_row = image_rows[1]
    assert len(image_data_row) == 3
    image_data_dict = {
        header: value
        for header, value in zip(image_header_row, image_data_row)
        if header is not None
    }
    assert image_data_dict
    assert isinstance(image_data_dict["src"], Image)
