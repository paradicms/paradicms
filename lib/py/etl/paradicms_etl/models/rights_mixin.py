from __future__ import annotations

from abc import ABC, abstractmethod
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from rdflib import URIRef


class RightsMixin(ABC):
    """
    Captures a group of properties that specify the rights of another model,
    such as the license and the rights statement.
    """

    class Builder(ABC):
        @abstractmethod
        def add_contributor(self, contributor: str | URIRef) -> RightsMixin.Builder:
            raise NotImplementedError

        @abstractmethod
        def add_creator(self, creator: str | URIRef) -> RightsMixin.Builder:
            raise NotImplementedError

        @abstractmethod
        def add_license(self, license: str | URIRef) -> RightsMixin.Builder:
            raise NotImplementedError

        @abstractmethod
        def add_rights_holder(self, holder: str | URIRef) -> RightsMixin.Builder:
            raise NotImplementedError

        @abstractmethod
        def add_rights_statement(self, statement: str | URIRef) -> RightsMixin.Builder:
            raise NotImplementedError

    @property
    @abstractmethod
    def contributors(self) -> tuple[str | URIRef, ...]:
        raise NotImplementedError

    @property
    @abstractmethod
    def creators(self) -> tuple[str | URIRef, ...]:
        raise NotImplementedError

    @property
    @abstractmethod
    def licenses(self) -> tuple[str | URIRef, ...]:
        raise NotImplementedError

    @property
    @abstractmethod
    def rights_holders(self) -> tuple[str | URIRef, ...]:
        raise NotImplementedError

    @property
    @abstractmethod
    def rights_statements(self) -> tuple[str | URIRef, ...]:
        raise NotImplementedError
