from abc import abstractmethod
from typing import Union, Tuple

from rdflib import URIRef, Literal

from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.rights_mixin import RightsMixin


class Image(NamedModel, RightsMixin):
    class Builder(RightsMixin.Builder):
        @abstractmethod
        def build(self) -> "Image":
            raise NotImplementedError

        @abstractmethod
        def set_copyable(self, copyable: bool) -> "Image.Builder":
            """
            Can this image be copied from its source (for GUI building), or does it have to be hot linked in order to use it?
            """
            raise NotImplementedError

        @abstractmethod
        def set_exact_dimensions(
            self, exact_dimensions: ImageDimensions
        ) -> "Image.Builder":
            raise NotImplementedError

        @abstractmethod
        def set_src(
            self, src: Union[str, ImageData, Literal, URIRef]
        ) -> "Image.Builder":
            """
            src that can be used in an <img> tag; if not specified, defaults to URI
            """
            raise NotImplementedError

        @abstractmethod
        def set_title(self, title: str) -> "Image.Builder":
            raise NotImplementedError

    @property
    @abstractmethod
    def copyable(self) -> bool:
        raise NotImplementedError

    @abstractmethod
    def replacer(self) -> Builder:
        raise NotImplementedError

    @property
    @abstractmethod
    def src(self) -> Union[ImageData, str, None]:
        raise NotImplementedError

    @property
    @abstractmethod
    def thumbnail_uris(self) -> Tuple[URIRef, ...]:
        pass
