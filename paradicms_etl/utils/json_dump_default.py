from datetime import datetime


def json_dump_default(o):
    if isinstance(o, datetime):
        return o.isoformat()
