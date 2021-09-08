from typing import Optional, Union

from rdflib import BNode, Graph, Literal, RDF, URIRef
from rdflib.resource import Resource

from paradicms_etl.namespace import CMS


class _Model:
    def __init__(self, resource: Resource):
        if not isinstance(resource.identifier, URIRef):
            raise ValueError("resource must have a URI")
        self.__resource = resource
        self.__resource.add(RDF.type, CMS[self.__class__.__name__])

    @classmethod
    def _copy_resource(cls, resource) -> Resource:
        if not isinstance(resource.identifier, URIRef):
            raise ValueError("resource must have a URI")
        graph = Graph()
        graph += resource.graph
        return graph.resource(resource.identifier)

    @classmethod
    def _create_resource(cls, identifier: Union[None, BNode, URIRef]) -> Resource:
        if identifier is None:
            identifier = BNode()
        if isinstance(identifier, BNode):
            identifier = identifier.skolemize()
        if not isinstance(identifier, URIRef):
            raise ValueError("identifier must be a URI")
        graph = Graph()
        resource = graph.resource(identifier)
        return resource

    def __optional_literal_value(
        self, p: URIRef, expected_type=None
    ) -> Optional[object]:
        value = self.resource.value(p)
        if value is None:
            return None
        if not isinstance(value, Literal):
            raise TypeError(f"expected {p} to have a literal value")
        python_value = value.toPython()
        if expected_type is not None and not isinstance(python_value, expected_type):
            raise TypeError(f"expected {p} to have a {expected_type} value")
        return python_value

    def _optional_bool_value(self, p: URIRef) -> Optional[str]:
        return self.__optional_literal_value(p, bool)

    def _optional_str_value(self, p: URIRef) -> Optional[str]:
        return self.__optional_literal_value(p, str)

    def _optional_uri_value(self, p: URIRef) -> Optional[URIRef]:
        value = self.resource.value(p)
        if value is None:
            return None
        if not isinstance(value, Resource) or not isinstance(value.identifier, URIRef):
            raise TypeError(f"expected {p} to have a URI value")
        return value.identifier

    def _required_bool_value(self, p: URIRef) -> bool:
        return self.__required_value(p, self._optional_bool_value(p))

    def _required_str_value(self, p: URIRef) -> str:
        return self.__required_value(p, self._optional_str_value(p))

    def _required_uri_value(self, p: URIRef) -> URIRef:
        return self.__required_value(p, self._optional_uri_value(p))

    def __required_value(self, p: URIRef, optional_value: Optional[object]) -> object:
        if optional_value is None:
            raise KeyError(f"missing {p}")
        return optional_value

    @property
    def _resource(self) -> Resource:
        return self.__resource

    def to_rdf(self, graph: Graph):
        graph += self.__resource.graph
