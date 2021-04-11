from paradicms_etl.extractors.nop_extractor import NopExtractor


def test_extract():
    assert NopExtractor(pipeline_id="test").extract() == {}
