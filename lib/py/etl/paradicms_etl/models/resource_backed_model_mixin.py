from abc import ABC, abstractmethod
from typing import TypeVar, Union, Tuple, Callable, Optional, Generator, Any

from rdflib import URIRef, Literal
from rdflib.resource import Resource

from paradicms_etl.models.image_data import ImageData

_Predicates = Union[URIRef, Tuple[URIRef, ...]]
_StatementObject = Union[Literal, Resource]
_ValueT = TypeVar("_ValueT")


class ResourceBackedModelMixin(ABC):
    class Builder:
        @abstractmethod
        def add(self, p: URIRef, o: Any):
            raise NotImplementedError

    @abstractmethod
    @staticmethod
    def _map_image_data_or_str_or_uri_value(
        value: _StatementObject,
    ) -> Union[ImageData, str, URIRef, None]:
        raise NotImplementedError

    @abstractmethod
    @staticmethod
    def _map_str_or_uri_value(value: _StatementObject) -> Union[str, URIRef, None]:
        raise NotImplementedError

    @abstractmethod
    @staticmethod
    def _map_uri_value(value: _StatementObject) -> Optional[URIRef]:
        raise NotImplementedError

    @abstractmethod
    def _optional_value(
        self,
        p: _Predicates,
        mapper: Callable[
            [_StatementObject], Union[_ValueT, None]
        ] = lambda value: value,  # type: ignore
    ) -> Optional[_ValueT]:
        raise NotImplementedError

    @abstractmethod
    def _required_value(
        self,
        p: _Predicates,
        mapper: Callable[
            [_StatementObject], Union[_ValueT, None]
        ] = lambda value: value,  # type: ignore
    ) -> _ValueT:
        raise NotImplementedError

    @abstractmethod
    def _values(
        self,
        predicates: _Predicates,
        mapper: Callable[
            [_StatementObject], Union[_ValueT, None]
        ] = lambda value: value,  # type: ignore
    ) -> Generator[_ValueT, None, None]:
        raise NotImplementedError
