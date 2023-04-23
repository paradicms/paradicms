from typing import Generator, Tuple, Union, TypeVar, Any
from typing import Optional

import rdflib
from rdflib import ConjunctiveGraph, Literal, RDF, URIRef
from rdflib import Graph
from rdflib.resource import Resource
from rdflib.term import Node, BNode

import paradicms_etl
from paradicms_etl.model import Model
from paradicms_etl.namespaces import CMS
from paradicms_etl.namespaces.bind_namespaces import EXCLUDE_RDFLIB_NAMESPACE_PREFIXES
from paradicms_etl.utils.module_namespaces import module_namespaces

_ValueT = TypeVar("_ValueT")


class ResourceBackedModel(Model):
    class Builder:
        def __init__(self, *, uri: Optional[URIRef] = None):
            graph = Graph()
            self._resource = graph.resource(uri if uri is not None else BNode())

        def add(self, p: URIRef, o: Any) -> "ResourceBackedModel.Builder":
            if o is None:
                pass
            elif isinstance(o, Model):
                if o.uri is not None:
                    # Assume that named models are yielded separately
                    self._resource.add(p, o.uri)
                else:
                    self._resource.add(p, o.to_rdf(graph=self._resource.graph))
            elif isinstance(o, Node):
                self._resource.add(p, o)
            elif isinstance(o, (list, tuple)):
                for sub_o in o:
                    self.add(p, sub_o)
            else:
                self._resource.add(p, Literal(o))
            return self

        def set(self, p: URIRef, o: Any) -> "ResourceBackedModel.Builder":
            if o is None:
                return self
            # May orphan BNode/Model objects
            self._resource.remove(p)
            return self.add(p, o)

    def __init__(self, resource: Resource):
        Model.__init__(self)
        self.__resource = resource

    @classmethod
    def from_rdf(cls, resource: Resource):
        graph = Graph()
        graph += resource.graph
        return cls(graph.resource(resource.identifier))

    @classmethod
    def json_ld_context(cls):
        """
        Return a JSON-LD context that can be used to parse/serialize a JSON version of this model.
        """

        context = {"@version": 1.1}
        for namespace_prefix, namespace in module_namespaces(
            rdflib.namespace, paradicms_etl.namespaces
        ).items():
            if namespace_prefix in EXCLUDE_RDFLIB_NAMESPACE_PREFIXES:
                continue
            context[namespace_prefix] = str(namespace)
        return context

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
                raise TypeError(
                    f"expected {p} to have a {expected_type} value, was {type(python_value)}"
                )
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
                from paradicms_etl.models.cms.cms_text import CmsText

                return CmsText(value)
        return None

    def _optional_uri_value(
        self, p: Union[URIRef, Tuple[URIRef, ...]]
    ) -> Optional[URIRef]:
        return self.__optional_value(self._uri_values(p))

    @staticmethod
    def __optional_value(values: Generator[_ValueT, None, None]) -> Optional[_ValueT]:
        for value in values:
            return value
        return None

    def _required_bool_value(self, p: Union[URIRef, Tuple[URIRef, ...]]) -> bool:
        return self.__required_value(self.__literal_values(p, bool))

    def _required_bytes_value(self, p: Union[URIRef, Tuple[URIRef, ...]]) -> bytes:
        return self.__required_value(self.__literal_values(p, bytes))

    def _required_str_value(self, p: Union[URIRef, Tuple[URIRef, ...]]) -> str:
        return self.__required_value(self.__literal_values(p, str))

    def _required_uri_value(self, p: Union[URIRef, Tuple[URIRef, ...]]) -> URIRef:
        return self.__required_value(self._uri_values(p))

    def _required_uri_values(
        self, p: Union[URIRef, Tuple[URIRef, ...]]
    ) -> Tuple[URIRef, ...]:
        return self.__required_values(self._uri_values(p))

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

    def _uri_values(
        self, p: Union[URIRef, Tuple[URIRef, ...]]
    ) -> Generator[URIRef, None, None]:
        value: Any
        for value in self.__values(p):
            if isinstance(value, Resource) and isinstance(value.identifier, URIRef):
                yield value.identifier

    @property
    def uri(self) -> Optional[URIRef]:
        return (
            self._resource.identifier
            if isinstance(self._resource.identifier, URIRef)
            else None
        )

    def __values(
        self, p: Union[URIRef, Tuple[URIRef, ...]]
    ) -> Generator[_ValueT, None, None]:
        if isinstance(p, URIRef):
            yield from self.__resource.objects(p)
        else:
            for p in p:
                yield from self.__resource.objects(p)
