from typing import Generator, Tuple, Union, TypeVar, Any, Callable
from typing import Optional

from rdflib import ConjunctiveGraph, Literal, RDF, URIRef, SDO
from rdflib import Graph
from rdflib.resource import Resource
from rdflib.term import Node, BNode

from paradicms_etl.model import Model
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.namespaces import CMS

_Predicates = Union[URIRef, Tuple[URIRef, ...]]
_StatementObject = Union[Literal, Resource]
_ValueT = TypeVar("_ValueT")


class ResourceBackedModel(Model):
    class Builder:
        def __init__(self, resource: Resource):
            self._resource = resource

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
            elif isinstance(o, Resource):
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

        @property
        def uri(self) -> URIRef:
            return self._resource.identifier

    def __init__(self, resource: Resource):
        Model.__init__(self)
        resource.add(RDF.type, self.rdf_type_uri())
        self.__resource = resource

    @classmethod
    def from_rdf(cls, resource: Resource):
        graph = Graph()
        graph += resource.graph
        return cls(graph.resource(resource.identifier))

    @staticmethod
    def _map_bool_value(value: _StatementObject) -> Optional[bool]:
        if isinstance(value, Literal):
            py_value = value.toPython()
            if isinstance(py_value, bool):
                return py_value
        return None

    @staticmethod
    def _map_bytes_value(value: _StatementObject) -> Optional[bytes]:
        if isinstance(value, Literal):
            py_value = value.toPython()
            if isinstance(py_value, bytes):
                return py_value
        return None

    @staticmethod
    def _map_image_data_or_str_or_uri_value(
        value: _StatementObject,
    ) -> Union[ImageData, str, URIRef, None]:
        if isinstance(value, Literal):
            py_value = value.toPython()
            if isinstance(py_value, str):
                return py_value
        elif isinstance(value, Resource):
            if isinstance(value.identifier, BNode):
                from paradicms_etl.models.cms.cms_image_data import CmsImageData

                return CmsImageData(value)
            else:
                assert isinstance(value.identifier, URIRef)
                return value.identifier
        return None

    @staticmethod
    def _map_literal_value(value: _StatementObject) -> Any:
        if isinstance(value, Literal):
            return value.toPython()
        return None

    @staticmethod
    def _map_str_value(value: _StatementObject) -> Optional[str]:
        if isinstance(value, Literal):
            py_value = value.toPython()
            if isinstance(py_value, str):
                return py_value
        return None

    @staticmethod
    def _map_str_or_text_value(
        value: _StatementObject,
    ) -> Union[str, "Text", None]:  # type: ignore # noqa
        if isinstance(value, Literal):
            literal: Literal = value
            py_value = literal.toPython()
            if isinstance(py_value, str):
                return py_value
        elif isinstance(value, Resource):
            resource: Resource = value
            value_type = resource.value(RDF.type)
            if isinstance(value_type, Resource):
                if value_type.identifier == CMS.Text:
                    from paradicms_etl.models.cms.cms_text import CmsText

                    return CmsText(value)
                elif value_type.identifier == SDO.TextObject:
                    from paradicms_etl.models.schema.schema_text_object import (
                        SchemaTextObject,
                    )

                    return SchemaTextObject(value)

        return None

    @staticmethod
    def _map_str_or_uri_value(value: _StatementObject) -> Union[str, URIRef, None]:
        if isinstance(value, Literal):
            py_value = value.toPython()
            if isinstance(py_value, str):
                return py_value
        elif isinstance(value, Resource):
            if isinstance(value.identifier, URIRef):
                return value.identifier
        return None

    @staticmethod
    def _map_uri_value(value: _StatementObject) -> Optional[URIRef]:
        if isinstance(value, Resource):
            if isinstance(value.identifier, URIRef):
                return value.identifier
        return None

    def _optional_value(
        self,
        p: _Predicates,
        mapper: Callable[
            [_StatementObject], Union[_ValueT, None]
        ] = lambda value: value,  # type: ignore
    ) -> Optional[_ValueT]:
        for value in self._values(p, mapper):
            return value
        return None

    def _required_value(
        self,
        p: _Predicates,
        mapper: Callable[
            [_StatementObject], Union[_ValueT, None]
        ] = lambda value: value,  # type: ignore
    ) -> _ValueT:
        for value in self._values(p, mapper):
            return value
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

    @property
    def uri(self) -> Optional[URIRef]:
        return (
            self._resource.identifier
            if isinstance(self._resource.identifier, URIRef)
            else None
        )

    def _values(
        self,
        predicates: _Predicates,
        mapper: Callable[
            [_StatementObject], Union[_ValueT, None]
        ] = lambda value: value,  # type: ignore
    ) -> Generator[_ValueT, None, None]:
        predicates_tuple: Tuple[URIRef, ...]
        if isinstance(predicates, URIRef):
            predicates_tuple = (predicates,)
        else:
            predicates_tuple = predicates

        for predicate in predicates_tuple:
            for value in self.__resource.objects(predicate):
                mapped_value = mapper(value)
                if mapped_value is not None:
                    yield mapped_value
