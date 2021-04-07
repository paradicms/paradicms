import json

from rdflib import URIRef

from paradicms_etl.models.institution import Institution
from paradicms_etl.utils.json_utils import json_remove_nulls, model_to_json_object


def test_model_to_json_object():
    model = Institution(name="Test institution", uri=URIRef("http://example.com"))
    json_ = json.loads(json.dumps(model_to_json_object(model)))
    assert json_ == {
        "name": "Test institution",
        "properties": [],
        "__typename": "Institution",
        "uri": "http://example.com",
    }


def test_json_remove_nulls():
    json_ = {"test1": None, "test2": {"test3": None, "test4": "4"}}
    new_json = json_remove_nulls(json_)
    assert id(new_json) != id(json_)
    assert len(new_json) == 1
    assert len(new_json["test2"]) == 1
    assert new_json["test2"]["test4"] == "4"
