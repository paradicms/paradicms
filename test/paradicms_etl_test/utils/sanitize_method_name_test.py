from paradicms_etl.utils.sanitize_method_name import sanitize_method_name


def test_sanitize_method_name():
    assert sanitize_method_name("test test") == "test_test"
    assert sanitize_method_name("test,test") == "test_test"
