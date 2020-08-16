from datetime import datetime


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
