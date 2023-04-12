from abc import abstractmethod, ABC
from typing import Union, Tuple

from rdflib import URIRef


class RightsMixin(ABC):
    """
    Captures a group of properties that specify the rights of another model,
    such as the license and the rights statement.
    """

    @property
    @abstractmethod
    def contributors(self) -> Tuple[Union[str, URIRef], ...]:
        pass

    @property
    @abstractmethod
    def creators(self) -> Tuple[Union[str, URIRef], ...]:
        pass

    @property
    @abstractmethod
    def holders(self) -> Tuple[Union[str, URIRef], ...]:
        pass

    @property
    @abstractmethod
    def license(self) -> Union[str, URIRef, None]:
        pass

    @property
    @abstractmethod
    def statement(self) -> Union[str, URIRef, None]:
        pass
