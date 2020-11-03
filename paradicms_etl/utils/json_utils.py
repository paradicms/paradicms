from datetime import datetime

from paradicms_etl._model import _Model


def model_to_json_object(_model: _Model):
    json_object = _model.to_dict()
    json_object = json_remove_nulls(json_object)
    json_object["__typename"] = _model.__class__.__name__
    return json_object


def json_remove_nulls(json_value):
    if isinstance(json_value, dict):
        return {
            key: json_remove_nulls(value)
            for key, value in json_value.items()
            if value is not None
        }
    elif isinstance(json_value, list):
        return [json_remove_nulls(value) for value in json_value]
    else:
        return json_value


def json_dump_default(o):
    if isinstance(o, datetime):
        return o.isoformat()
