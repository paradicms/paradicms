from __future__ import annotations

import logging
from abc import abstractmethod
from datetime import date, datetime
from typing import TYPE_CHECKING, Any, TypeVar

import rdflib.collection
from rdflib import OWL, RDF, ConjunctiveGraph, Graph, Literal, URIRef
from rdflib.resource import Resource
from rdflib.term import Node

from paradicms_etl.model import Model
from paradicms_etl.utils.clone_graph import clone_graph

if TYPE_CHECKING:
    from collections.abc import Callable, Generator

    from paradicms_etl.models.date_time_union import DateTimeUnion
    from paradicms_etl.models.image_data import ImageData
    from paradicms_etl.models.text import Text

_ModelT = TypeVar("_ModelT", bound=Model)
_Predicates = URIRef | tuple[URIRef, ...]
_StatementObject = Literal | Resource
_ValueT = TypeVar("_ValueT")


class ResourceBackedModel(Model):
    class Builder:
        def __init__(self, resource: Resource):
            if not isinstance(resource.identifier, URIRef):
                raise TypeError("expected URI-identified resource")
            self.__resource = resource

        def add(self, p: URIRef, o: Any) -> ResourceBackedModel.Builder:
            if o is None:
                pass
            elif isinstance(o, Model):
                if not str(o.uri).lower().startswith("urn:uuid:") and not str(
                    o.uri
                ).lower().startswith("urn:paradicms:"):
                    logging.getLogger(__name__).warning(
                        "adding non-urn: model %s to model %s's graph",
                        o.uri,
                        self.__resource.identifier,
                    )
                    # raise ValueError(
                    #     f"adding non-urn:uuid model {o.uri} to {self.__resource.identifier}'s graph"
                    # )
                self._resource.add(p, o.to_rdf(graph=self._resource.graph))
            elif isinstance(o, Node | Resource):
                self._resource.add(p, o)
            elif isinstance(o, list | tuple):
                for sub_o in o:
                    self.add(p, sub_o)
            else:
                self._resource.add(p, Literal(o))
            return self

        @property
        def _resource(self) -> Resource:
            return self.__resource

        def set(self, p: URIRef, o: Any) -> ResourceBackedModel.Builder:  # noqa: A003
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
        if not isinstance(resource.identifier, URIRef):
            raise TypeError("expected URI-identified resource")
        resource.add(RDF.type, self.rdf_type_uri())
        self.__resource = resource

    @property
    def label(self) -> str | None:
        label_property_uri = self.label_property_uri()
        if label_property_uri is None:
            return None
        return self._optional_value(label_property_uri, self._map_term_to_str)

    @classmethod
    @abstractmethod
    def label_property_uri(cls) -> URIRef | None:
        return None

    @classmethod
    def from_rdf(cls, resource: Resource) -> ResourceBackedModel:
        return cls(clone_graph(resource.graph).resource(resource.identifier))

    @staticmethod
    def _map_term_to_bool(term: _StatementObject) -> bool | None:
        if isinstance(term, Literal):
            py_value = term.toPython()
            if isinstance(py_value, bool):
                return py_value
        return None

    @staticmethod
    def _map_term_to_bytes(term: _StatementObject) -> bytes | None:
        if isinstance(term, Literal):
            py_value = term.toPython()
            if isinstance(py_value, bytes):
                return py_value
        return None

    @staticmethod
    def _map_term_to_date_time_union(term: _StatementObject) -> DateTimeUnion | None:
        if isinstance(term, Literal):
            py_value = term.toPython()
            if isinstance(py_value, date | datetime | str):
                return py_value
        elif isinstance(term, Resource):
            from paradicms_etl.models.owl_time.owl_time_date_time_description import (
                OwlTimeDateTimeDescription,
            )

            return ResourceBackedModel._map_term_to_model(
                model_class=OwlTimeDateTimeDescription, term=term
            )
        return None

    @staticmethod
    def _map_term_to_float(term: _StatementObject) -> float | None:
        if isinstance(term, Literal):
            py_value = term.toPython()
            if isinstance(py_value, float):
                return py_value
            if isinstance(py_value, int):
                return float(py_value)
        return None

    @staticmethod
    def _map_term_to_image_data_or_str_or_uri(
        term: _StatementObject,
    ) -> ImageData | str | URIRef | None:
        if isinstance(term, Literal):
            py_value = term.toPython()
            if isinstance(py_value, str):
                return py_value
        elif isinstance(term, Resource):
            from paradicms_etl.models.cms.cms_image_data import CmsImageData

            model = ResourceBackedModel._map_term_to_model(CmsImageData, term)
            if model is not None:
                return model
            assert isinstance(term.identifier, URIRef)
            return term.identifier
        return None

    @staticmethod
    def _map_term_to_int(term: _StatementObject) -> int | None:
        if isinstance(term, Literal):
            py_value = term.toPython()
            if isinstance(py_value, int):
                return py_value
        return None

    @staticmethod
    def _map_term_to_collection(
        term: _StatementObject,
    ) -> tuple[Node, ...] | None:
        if not isinstance(term, Resource):
            return None
        resource: Resource = term
        return tuple(rdflib.collection.Collection(resource.graph, resource.identifier))

    # @staticmethod
    # def _map_term_to_container(
    #     term: _StatementObject,
    # ) -> Optional[Tuple[BNode | Literal | URIRef]]:
    #     if not isinstance(term, Resource):
    #         return None
    #     resource: Resource = term
    #     result: List[BNode | Literal | URIRef] = []
    #     container_rdf_type = resource.value(RDF.type)
    #     container_class = rdflib.Container
    #     if isinstance(container_rdf_type, Resource):
    #         if container_rdf_type.identifier == RDF.Alt:
    #             container_class = rdflib.Alt
    #         elif container_rdf_type.identifier == RDF.Bag:
    #             container_class = rdflib.Bag
    #         elif container_rdf_type.identifier == RDF.Seq:
    #             container_class = rdflib.Seq
    #         elif container_rdf_type.identifier == RDF.List:
    #             container_class = rdflib.List
    #         else:
    #             raise NotImplementedError(container_rdf_type.identifier)
    #
    #     return tuple(container_class(resource.graph, resource.identifier))

    @staticmethod
    def _map_term_to_literal(term: _StatementObject) -> Literal | None:
        if isinstance(term, Literal):
            return term
        return None

    @staticmethod
    def _map_term_to_literal_or_uri(
        term: _StatementObject,
    ) -> Literal | URIRef | None:
        if isinstance(term, Literal):
            return term
        if isinstance(term, Resource) and isinstance(term.identifier, URIRef):
            return term.identifier
        return None

    @staticmethod
    def _map_term_to_model(
        model_class: type[_ModelT], term: _StatementObject
    ) -> _ModelT | None:
        if not isinstance(term, Resource):
            return None
        resource: Resource = term
        value_type = resource.value(RDF.type)
        if not isinstance(value_type, Resource):
            return None
        if value_type.identifier == model_class.rdf_type_uri():
            return model_class.from_rdf(resource)  # type: ignore
        return None

    @staticmethod
    def _map_term_to_str(term: _StatementObject) -> str | None:
        if isinstance(term, Literal):
            py_value = term.toPython()
            if isinstance(py_value, str):
                return py_value
        return None

    @staticmethod
    def _map_term_to_str_or_text(
        term: _StatementObject,
    ) -> str | Text | None:  # type: ignore
        if isinstance(term, Literal):
            literal: Literal = term
            py_value = literal.toPython()
            if isinstance(py_value, str):
                return py_value
        else:
            from paradicms_etl.models.dc.dc_text import DcText

            dc_text = ResourceBackedModel._map_term_to_model(DcText, term)
            if dc_text is not None:
                return dc_text

            from paradicms_etl.models.schema.schema_text_object import SchemaTextObject

            schema_text_object = ResourceBackedModel._map_term_to_model(
                SchemaTextObject, term
            )
            if schema_text_object is not None:
                return schema_text_object

        return None

    @staticmethod
    def _map_term_to_str_or_uri(term: _StatementObject) -> str | URIRef | None:
        if isinstance(term, Literal):
            py_value = term.toPython()
            if isinstance(py_value, str):
                return py_value
        elif isinstance(term, Resource) and isinstance(term.identifier, URIRef):
            return term.identifier
        return None

    @staticmethod
    def _map_term_to_uri(term: _StatementObject) -> URIRef | None:
        if isinstance(term, Resource) and isinstance(term.identifier, URIRef):
            return term.identifier
        return None

    def _optional_value(
        self,
        p: _Predicates,
        mapper: Callable[
            [_StatementObject], _ValueT | None
        ] = lambda value: value,  # type: ignore
    ) -> _ValueT | None:
        for value in self._values(p, mapper):
            return value
        return None

    @property
    def _required_label(self) -> str:
        label_property_uri = self.label_property_uri()
        if label_property_uri is None:
            raise NotImplementedError(
                self.__class__.__name__ + ": must implement label_property_uri"
            )
        return self._required_value(label_property_uri, self._map_term_to_str)

    def _required_value(
        self,
        p: _Predicates,
        mapper: Callable[[_StatementObject], _ValueT | None] = lambda value: value,  # type: ignore
    ) -> _ValueT:
        for value in self._values(p, mapper):
            return value
        raise KeyError

    @property
    def resource(self) -> Resource:
        return self.__resource

    @classmethod
    def same_as_property_uri(cls) -> URIRef:
        return OWL.sameAs

    @property
    def same_as_uris(self) -> tuple[URIRef, ...]:
        return tuple(self._values(self.same_as_property_uri(), self._map_term_to_uri))

    def to_rdf(self, graph: Graph) -> Resource:
        if isinstance(graph, ConjunctiveGraph):
            context = graph.get_context(self.resource.identifier())
            context += self.resource.graph
            return context.resource(self.resource.identifier)
        graph += self.resource.graph
        return graph.resource(self.resource.identifier)

    @property
    def uri(self) -> URIRef:
        return self.resource.identifier

    def _values(
        self,
        predicates: _Predicates,
        mapper: Callable[
            [_StatementObject], _ValueT | None
        ] = lambda value: value,  # type: ignore
    ) -> Generator[_ValueT, None, None]:
        predicates_tuple: tuple[URIRef, ...]
        if isinstance(predicates, URIRef):
            predicates_tuple = (predicates,)
        else:
            predicates_tuple = predicates

        for predicate in predicates_tuple:
            for value in self.__resource.objects(predicate):
                mapped_value = mapper(value)
                if mapped_value is not None:
                    yield mapped_value
