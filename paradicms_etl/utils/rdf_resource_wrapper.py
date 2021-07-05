from rdflib import Literal, URIRef
from rdflib.resource import Resource


class RdfResourceWrapper:
    def __init__(self, resource: Resource):
        self.__resource = resource

    def __getattr__(self, item):
        return getattr(self.__resource, item)

    def optional_python_value(self, property_: URIRef, value_type):
        o = self.value(property_)
        if o is None:
            return None
        if not isinstance(o, Literal):
            raise TypeError(
                f"expected {property_} object to be a literal, not {type(o)}"
            )
        value = o.toPython()
        if not isinstance(value, value_type):
            raise TypeError(
                f"expected {property_} object to be a {value_type}: {value}"
            )
        return value

    def required_uri_value(self, property_: URIRef) -> URIRef:
        o = self.value(property_)
        if o is None:
            raise KeyError(f"missing {property_}")
        if not isinstance(o, Resource):
            raise TypeError(f"expected {property_} object to be a URI: {o}")
        assert isinstance(o.identifier, URIRef)
        return o.identifier
