from abc import abstractmethod, ABC
from typing import Union, Tuple, Any

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
