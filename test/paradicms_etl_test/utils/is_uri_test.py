from paradicms_etl.utils.is_uri import is_uri


def test_is_uri():
    assert is_uri("http://example.com")
    assert is_uri("https://example.com")
    assert not is_uri("some other string")
    assert not is_uri(" http://example.com")
