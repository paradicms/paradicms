from paradicms_etl.utils.json_remove_nulls import json_remove_nulls


def test_json_remove_nulls():
    json_ = {"test1": None, "test2": {"test3": None, "test4": "4"}}
    new_json = json_remove_nulls(json_)
    assert id(new_json) != id(json_)
    assert len(new_json) == 1
    assert len(new_json["test2"]) == 1
    assert new_json["test2"]["test4"] == "4"
