from abc import ABC, abstractmethod
from typing import Tuple

from rdflib import URIRef


class ImagesMixin(ABC):
    """
    Mixin for models that have images of them e.g., Agent, Work.
    """

    @abstractmethod
    @property
    def image_uris(self) -> Tuple[URIRef, ...]:
        raise NotImplementedError
