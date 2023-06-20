from abc import ABC, abstractmethod
from typing import Tuple, Union

from rdflib import URIRef

from paradicms_etl.models.image import Image


class ImagesMixin(ABC):
    """
    Mixin for models that have images of them e.g., Agent, Work.
    """

    class Builder(ABC):
        @abstractmethod
        def add_image(self, image: Union[Image, URIRef]) -> "ImagesMixin.Builder":
            raise NotImplementedError

    @property
    @abstractmethod
    def image_uris(self) -> Tuple[URIRef, ...]:
        raise NotImplementedError
