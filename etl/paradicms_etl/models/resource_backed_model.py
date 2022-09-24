from typing import Generator, Optional, Tuple, Union, TypeVar, Any

from rdflib import ConjunctiveGraph, Graph, Literal, RDF, URIRef
from rdflib.resource import Resource

from paradicms_etl.model import Model
from paradicms_etl.namespaces import CMS

_ValueT = TypeVar("_ValueT")


class ResourceBackedModel(Model):
    def __init__(self, resource: Resource):
        self.__resource = resource

    def _check_rdf_type(self, expected_rdf_type: URIRef):
        for actual_rdf_type in self.__values(RDF.type):
            if not isinstance(actual_rdf_type, Resource):
                raise ValueError("non-Resource rdf:type")
            if not isinstance(actual_rdf_type.identifier, URIRef):
                raise ValueError("non-URIRef rdf:type")
            if actual_rdf_type.identifier == expected_rdf_type:
                return
        raise ValueError("missing expected rdf:type " + expected_rdf_type)

    @classmethod
    def from_rdf(cls, resource: Resource):
        graph = Graph()
        graph += resource.graph
        return cls(graph.resource(resource.identifier))

    @property
    def label(self) -> Optional[str]:
        pass

    def __literal_values(
        self, p: Union[URIRef, Tuple[URIRef, ...]], expected_type=None
    ) -> Generator[_ValueT, None, None]:
        value: _ValueT
        for value in self.__values(p):
            if not isinstance(value, Literal):
                continue
            literal: Literal = value
            python_value = literal.toPython()
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

    def _optional_str_or_text_value(
        self, p: Union[URIRef, Tuple[URIRef, ...]]
    ) -> Union[str, "Text", None]:  # type: ignore # noqa
        value: Union[Literal, Resource]
        for value in self.__values(p):
            if isinstance(value, Literal):
                literal: Literal = value
                python_value = literal.toPython()
                if not isinstance(python_value, str):
                    raise TypeError(
                        f"expected {p} literal to be a string, not a {type(python_value)}"
                    )
            elif isinstance(value, Resource):
                resource: Resource = value
                value_type = resource.value(RDF.type)
                if (
                    not isinstance(value_type, Resource)
                    or value_type.identifier != CMS.Text
                ):
                    raise TypeError(
                        f"expected {p} node to be a Text, not a {value_type}"
                    )
                from paradicms_etl.models.text import Text

                return Text(value)
        return None

    def _optional_uri_value(
        self, p: Union[URIRef, Tuple[URIRef, ...]]
    ) -> Optional[URIRef]:
        return self.__optional_value(self.__uri_values(p))

    @staticmethod
    def __optional_value(values: Generator[_ValueT, None, None]) -> Optional[_ValueT]:
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
    def __required_value(values: Generator[_ValueT, None, None]) -> _ValueT:
        for value in values:
            return value
        raise KeyError

    @staticmethod
    def __required_values(
        values: Generator[_ValueT, None, None],
    ) -> Tuple[_ValueT, ...]:
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
        value: Any
        for value in self.__values(p):
            if isinstance(value, Resource) and isinstance(value.identifier, URIRef):
                yield value.identifier

    def __values(
        self, p: Union[URIRef, Tuple[URIRef, ...]]
    ) -> Generator[_ValueT, None, None]:
        if isinstance(p, URIRef):
            yield from self.__resource.objects(p)
        else:
            for p in p:
                yield from self.__resource.objects(p)
