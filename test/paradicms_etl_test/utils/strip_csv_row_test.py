from paradicms_etl.utils.strip_csv_row import strip_csv_row


def test_strip_csv_row():
    csv_row = {"emptykey": "", "blankkey": "  ", "otherkey": "test  "}
    stripped_csv_row = strip_csv_row(csv_row)
    assert len(stripped_csv_row) == 1
    assert stripped_csv_row["otherkey"] == "test"
    assert id(stripped_csv_row) != id(csv_row)
