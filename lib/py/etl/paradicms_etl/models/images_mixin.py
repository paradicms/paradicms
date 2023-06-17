from abc import ABC, abstractmethod
from typing import Tuple

from rdflib import URIRef


class ImagesMixin(ABC):
    """
    Mixin for models that have images of them e.g., Agent, Work.
    """

    @property
    @abstractmethod
    def image_uris(self) -> Tuple[URIRef, ...]:
        raise NotImplementedError
