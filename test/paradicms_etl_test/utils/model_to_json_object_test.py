import json

from rdflib import URIRef

from paradicms_etl.models.institution import Institution
from paradicms_etl.utils.model_to_json_object import model_to_json_object


def test_model_to_json_object():
    model = Institution(name="Test institution", uri=URIRef("http://example.com"))
    json_ = json.loads(json.dumps(model_to_json_object(model)))
    assert json_ == {
        "name": "Test institution",
        "properties": [],
        "__typename": "Institution",
        "uri": "http://example.com",
    }
