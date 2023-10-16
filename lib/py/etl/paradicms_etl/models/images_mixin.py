from __future__ import annotations

from abc import ABC, abstractmethod
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from rdflib import URIRef


class ImagesMixin(ABC):
    """
    Mixin for models that have images of them e.g., Agent, Work.
    """

    class Builder(ABC):
        @abstractmethod
        def add_image(self, image: URIRef) -> ImagesMixin.Builder:
            raise NotImplementedError

        def copy_images(self, other: ImagesMixin) -> ImagesMixin.Builder:
            for image_uri in other.image_uris:
                self.add_image(image_uri)
            return self

    @property
    @abstractmethod
    def image_uris(self) -> tuple[URIRef, ...]:
        raise NotImplementedError
