from paradicms_etl.utils.string_utils import is_uri, sanitize_method_name


def test_is_uri():
    assert is_uri("http://example.com")
    assert is_uri("https://example.com")
    assert not is_uri("some other string")
    assert not is_uri(" http://example.com")


def test_sanitize_method_name():
    assert sanitize_method_name("test test") == "test_test"
    assert sanitize_method_name("test,test") == "test_test"
