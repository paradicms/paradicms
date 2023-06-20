from abc import abstractmethod, ABC
from typing import Union, Tuple, Any, Optional

from rdflib import URIRef


class RightsMixin(ABC):
    """
    Captures a group of properties that specify the rights of another model,
    such as the license and the rights statement.
    """

    class Builder(ABC):
        @abstractmethod
        def add_contributor(self, contributor: Any) -> "RightsMixin.Builder":
            raise NotImplementedError

        @abstractmethod
        def add_creator(self, creator: Any) -> "RightsMixin.Builder":
            raise NotImplementedError

        @abstractmethod
        def add_license(self, license: Any) -> "RightsMixin.Builder":
            raise NotImplementedError

        @abstractmethod
        def add_rights_holder(self, holder: Any) -> "RightsMixin.Builder":
            raise NotImplementedError

        @abstractmethod
        def add_rights_statement(self, statement: Any) -> "RightsMixin.Builder":
            raise NotImplementedError

        def copy_rights(self, other: "RightsMixin") -> "RightsMixin.Builder":
            for contributor in other.contributors:
                self.add_contributor(contributor)
            for creator in other.creators:
                self.add_creator(creator)
            for holder in other.rights_holders:
                self.add_rights_holder(holder)
            if other.license:
                self.add_license(other.license)
            if other.rights_statement:
                self.add_rights_statement(other.rights_statement)
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
    def license(self) -> Union[str, URIRef, None]:
        raise NotImplementedError

    @property
    @abstractmethod
    def rights_holders(self) -> Tuple[Union[str, URIRef], ...]:
        raise NotImplementedError

    @property
    @abstractmethod
    def rights_statement(self) -> Union[str, URIRef, None]:
        raise NotImplementedError

    @property
    @abstractmethod
    def source(self) -> Optional[URIRef]:
        raise NotImplementedError
