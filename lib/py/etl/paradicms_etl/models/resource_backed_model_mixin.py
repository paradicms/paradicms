from abc import ABC, abstractmethod
from collections.abc import Callable, Generator
from typing import Any, Optional, Tuple, Type, TypeVar, Union

from rdflib import Literal, URIRef
from rdflib.resource import Resource

from paradicms_etl.model import Model
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.text import Text

_ModelT = TypeVar("_ModelT", bound=Model)
_Predicates = Union[URIRef, Tuple[URIRef, ...]]
_StatementObject = Union[Literal, Resource]
_ValueT = TypeVar("_ValueT")


class ResourceBackedModelMixin(ABC):
    class Builder:
        @abstractmethod
        def add(self, p: URIRef, o: Any):
            raise NotImplementedError

        @property
        @abstractmethod
        def _resource(self) -> Resource:
            pass

        @abstractmethod
        def set(self, p: URIRef, o: Any):
            raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_term_to_image_data_or_str_or_uri(
        term: _StatementObject,
    ) -> ImageData | str | URIRef | None:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_term_to_int(term: _StatementObject) -> int | None:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_term_to_literal(term: _StatementObject) -> Literal | None:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_term_to_literal_or_uri(
        term: _StatementObject,
    ) -> Literal | URIRef | None:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_term_to_model(
        model_class: type[_ModelT], term: _StatementObject
    ) -> _ModelT | None:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_term_to_str_or_uri(term: _StatementObject) -> str | URIRef | None:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_term_to_str_or_text(term: _StatementObject) -> str | Text | None:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_term_to_str(term: _StatementObject) -> str | None:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_term_to_uri(term: _StatementObject) -> URIRef | None:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _optional_value(
        p: _Predicates,
        mapper: Callable[
            [_StatementObject], _ValueT | None
        ] = lambda value: value,  # type: ignore
    ) -> _ValueT | None:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _required_value(
        p: _Predicates,
        mapper: Callable[
            [_StatementObject], _ValueT | None
        ] = lambda value: value,  # type: ignore
    ) -> _ValueT:
        raise NotImplementedError

    @property
    @abstractmethod
    def resource(self) -> Resource:
        pass

    @staticmethod
    @abstractmethod
    def _values(
        predicates: _Predicates,
        mapper: Callable[
            [_StatementObject], _ValueT | None
        ] = lambda value: value,  # type: ignore
    ) -> Generator[_ValueT, None, None]:
        raise NotImplementedError
