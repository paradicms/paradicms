from __future__ import annotations

from abc import ABC, abstractmethod

from rdflib import URIRef


class ImagesMixin(ABC):
    """
    Mixin for models that have images of them e.g., Agent, Work.
    """

    class Builder(ABC):
        @abstractmethod
        def add_image(self, image: URIRef) -> ImagesMixin.Builder:
            raise NotImplementedError

    @property
    @abstractmethod
    def image_uris(self) -> tuple[URIRef, ...]:
        raise NotImplementedError
