from paradicms_etl.extractors.nop_extractor import nop_extractor


def test_extract():
    assert nop_extractor() == {}
