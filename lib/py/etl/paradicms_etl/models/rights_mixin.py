from abc import abstractmethod, ABC
from typing import Union, Tuple

from rdflib import URIRef


class RightsMixin(ABC):
    """
    Captures a group of properties that specify the rights of another model,
    such as the license and the rights statement.
    """

    class Builder(ABC):
        @abstractmethod
        def add_contributor(
            self, contributor: Union[str, URIRef]
        ) -> "RightsMixin.Builder":
            raise NotImplementedError

        @abstractmethod
        def add_creator(self, creator: Union[str, URIRef]) -> "RightsMixin.Builder":
            raise NotImplementedError

        @abstractmethod
        def add_license(self, license: Union[str, URIRef]) -> "RightsMixin.Builder":
            raise NotImplementedError

        @abstractmethod
        def add_rights_holder(
            self, holder: Union[str, URIRef]
        ) -> "RightsMixin.Builder":
            raise NotImplementedError

        @abstractmethod
        def add_rights_statement(
            self, statement: Union[str, URIRef]
        ) -> "RightsMixin.Builder":
            raise NotImplementedError

        def copy_rights(self, other: "RightsMixin") -> "RightsMixin.Builder":
            for contributor in other.contributors:
                self.add_contributor(contributor)
            for creator in other.creators:
                self.add_creator(creator)
            for license_ in other.licenses:
                self.add_license(license_)
            for rights_holder in other.rights_holders:
                self.add_rights_holder(rights_holder)
            for rights_statement in other.rights_statements:
                self.add_rights_statement(rights_statement)
            return self

    @property
    @abstractmethod
    def contributors(self) -> Tuple[Union[str, URIRef], ...]:
        raise NotImplementedError

    @property
    @abstractmethod
    def creators(self) -> Tuple[Union[str, URIRef], ...]:
        raise NotImplementedError

    @property
    @abstractmethod
    def licenses(self) -> Tuple[Union[str, URIRef], ...]:
        raise NotImplementedError

    @property
    @abstractmethod
    def rights_holders(self) -> Tuple[Union[str, URIRef], ...]:
        raise NotImplementedError

    @property
    @abstractmethod
    def rights_statements(self) -> Tuple[Union[str, URIRef], ...]:
        raise NotImplementedError
