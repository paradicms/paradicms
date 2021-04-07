from paradicms_etl._model import _Model
from paradicms_etl.utils.json_remove_nulls import json_remove_nulls


def model_to_json_object(_model: _Model):
    json_object = _model.to_dict()
    json_object = json_remove_nulls(json_object)
    json_object["__typename"] = _model.__class__.__name__
    return json_object
