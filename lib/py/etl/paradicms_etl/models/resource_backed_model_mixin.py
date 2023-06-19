from abc import ABC, abstractmethod
from typing import TypeVar, Union, Tuple, Callable, Optional, Generator, Any

from rdflib import URIRef, Literal
from rdflib.resource import Resource

from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.text import Text

_Predicates = Union[URIRef, Tuple[URIRef, ...]]
_StatementObject = Union[Literal, Resource]
_ValueT = TypeVar("_ValueT")


class ResourceBackedModelMixin(ABC):
    class Builder:
        @abstractmethod
        def add(self, p: URIRef, o: Any):
            raise NotImplementedError

        @abstractmethod
        def set(self, p: URIRef, o: Any):
            raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_image_data_or_str_or_uri_value(
        value: _StatementObject,
    ) -> Union[ImageData, str, URIRef, None]:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_str_or_uri_value(value: _StatementObject) -> Union[str, URIRef, None]:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_str_or_text_value(value: _StatementObject) -> Union[str, Text, None]:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_str_value(value: _StatementObject) -> Optional[str]:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_uri_value(value: _StatementObject) -> Optional[URIRef]:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _optional_value(
        p: _Predicates,
        mapper: Callable[
            [_StatementObject], Union[_ValueT, None]
        ] = lambda value: value,  # type: ignore
    ) -> Optional[_ValueT]:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _required_value(
        p: _Predicates,
        mapper: Callable[
            [_StatementObject], Union[_ValueT, None]
        ] = lambda value: value,  # type: ignore
    ) -> _ValueT:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _values(
        predicates: _Predicates,
        mapper: Callable[
            [_StatementObject], Union[_ValueT, None]
        ] = lambda value: value,  # type: ignore
    ) -> Generator[_ValueT, None, None]:
        raise NotImplementedError
