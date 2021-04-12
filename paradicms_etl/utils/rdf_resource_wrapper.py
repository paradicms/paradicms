from typing import Optional

from rdflib import Literal, URIRef
from rdflib.resource import Resource


class RdfResourceWrapper:
    def __init__(self, resource: Resource):
        self.__resource = resource

    def __getattr__(self, item):
        return getattr(self.__resource, item)

    def str_value(self, predicate: URIRef) -> Optional[str]:
        value = self.value(predicate)
        if not isinstance(value, Literal):
            return None
        value_str = value.toPython()
        if not isinstance(value_str, str):
            return None
        return value_str
