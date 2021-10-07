from typing import Generator, Optional, Tuple, Union

from rdflib import BNode, ConjunctiveGraph, Graph, Literal, RDF, URIRef
from rdflib.resource import Resource

from paradicms_etl.namespace import CMS


class _Model:
    def __init__(self, resource: Resource):
        if not isinstance(resource.identifier, URIRef):
            raise ValueError("resource must have a URI")
        self.__resource = resource
        self.__resource.add(RDF.type, CMS[self.__class__.__name__])
        # print(self.__class__.__name__, "resource:")
        # print(self.__resource.graph.serialize().decode("utf-8"))

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

    @classmethod
    def from_rdf(cls, resource: Resource):
        return cls(cls._copy_resource(resource))

    @property
    def label(self) -> Optional[str]:
        pass

    def __literal_values(
        self, p: Union[URIRef, Tuple[URIRef, ...]], expected_type=None
    ) -> Generator[object, None, None]:
        for value in self.__values(p):
            if not isinstance(value, Literal):
                continue
            python_value = value.toPython()
            if expected_type is not None and not isinstance(
                python_value, expected_type
            ):
                raise TypeError(f"expected {p} to have a {expected_type} value")
            yield python_value

    def _optional_bool_value(
        self, p: Union[URIRef, Tuple[URIRef, ...]]
    ) -> Optional[bool]:
        return self.__optional_value(self.__literal_values(p, bool))

    def _optional_str_value(
        self, p: Union[URIRef, Tuple[URIRef, ...]]
    ) -> Optional[str]:
        return self.__optional_value(self.__literal_values(p, str))

    def _optional_uri_value(
        self, p: Union[URIRef, Tuple[URIRef, ...]]
    ) -> Optional[URIRef]:
        return self.__optional_value(self.__uri_values(p))

    @staticmethod
    def __optional_value(values: Generator[object, None, None]) -> Optional[object]:
        for value in values:
            return value
        return None

    def _required_bool_value(self, p: Union[URIRef, Tuple[URIRef, ...]]) -> bool:
        return self.__required_value(self.__literal_values(p, bool))

    def _required_str_value(self, p: Union[URIRef, Tuple[URIRef, ...]]) -> str:
        return self.__required_value(self.__literal_values(p, str))

    def _required_uri_value(self, p: Union[URIRef, Tuple[URIRef, ...]]) -> URIRef:
        return self.__required_value(self.__uri_values(p))

    def _required_uri_values(
        self, p: Union[URIRef, Tuple[URIRef, ...]]
    ) -> Tuple[URIRef, ...]:
        return self.__required_values(self.__uri_values(p))

    @staticmethod
    def __required_value(values: Generator[object, None, None]) -> object:
        for value in values:
            return value
        raise KeyError

    @staticmethod
    def __required_values(
        values: Generator[object, None, None],
    ) -> Tuple[object, ...]:
        values_tuple = tuple(values)
        if values_tuple:
            return values_tuple
        raise KeyError

    @property
    def _resource(self) -> Resource:
        return self.__resource

    def to_rdf(self, graph: Graph) -> Resource:
        if isinstance(graph, ConjunctiveGraph):
            context = graph.get_context(self._resource.identifier())
            context += self._resource.graph
            return context.resource(self._resource.identifier)
        else:
            graph += self._resource.graph
            return graph.resource(self._resource.identifier)

    def __uri_values(
        self, p: Union[URIRef, Tuple[URIRef, ...]]
    ) -> Generator[URIRef, None, None]:
        for value in self.__values(p):
            if isinstance(value, Resource) and isinstance(value.identifier, URIRef):
                yield value.identifier

    def __values(
        self, p: Union[URIRef, Tuple[URIRef, ...]]
    ) -> Generator[object, None, None]:
        if isinstance(p, URIRef):
            yield from self.__resource.objects(p)
        else:
            for p in p:
                yield from self.__resource.objects(p)
