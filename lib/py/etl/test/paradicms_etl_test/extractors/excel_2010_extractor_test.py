from paradicms_etl.extractors.excel_2010_extractor import Excel2010Extractor


def test_extract(excel_2010_test_data_file_path):
    results = Excel2010Extractor(xlsx_file_path=excel_2010_test_data_file_path)(
        force=False
    )
    assert len(results) == 1
    assert "Person" in results
    people = results["Person"]
    assert len(people) == 1
    person = people[0]
    assert person == {
        "id": "minor-gordon",
        "family_name": "Gordon",
        "given_name": "Minor",
    }
