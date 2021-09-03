from typing import Optional

from rdflib import BNode, Graph, Literal, RDF, URIRef
from rdflib.resource import Resource

from paradicms_etl.namespace import CMS


class _Model:
    def __init__(self, *, uri: Optional[URIRef] = None):
        self.__graph = Graph()
        self.__resource = self.__graph.resource(
            uri if uri is not None else BNode().skolemize()
        )
        self.__resource.add(RDF.type, CMS[self.__class__.__name__])

    def __optional_literal_value(
        self, p: URIRef, expected_type=None
    ) -> Optional[object]:
        value = self.resource.value(p)
        if not isinstance(value, Literal):
            raise TypeError(f"expected {p} to have a literal value")
        python_value = value.toPython()
        if expected_type is not None and not isinstance(python_value, expected_type):
            raise TypeError(f"expected {p} to have a {expected_type} value")
        return python_value

    def _optional_str_value(self, p: URIRef) -> Optional[str]:
        return self.__optional_literal_value(p, str)

    def _optional_uri_value(self, p: URIRef) -> Optional[URIRef]:
        value = self.resource.value(p)
        if not isinstance(value, Resource) or not isinstance(value.identifier, URIRef):
            raise TypeError(f"expected {p} to have a URI value")
        return value.identifier

    @property
    def resource(self) -> Resource:
        return self.__resource

    def __required_value(self, p: URIRef, optional_value: Optional[object]) -> object:
        if optional_value is None:
            raise KeyError(f"missing {p}")
        return optional_value

    def _required_str_value(self, p: URIRef) -> str:
        return self.__required_value(p, self._optional_str_value(p))

    def _required_uri_value(self, p: URIRef) -> URIRef:
        return self.__required_value(p, self._optional_uri_value(p))
