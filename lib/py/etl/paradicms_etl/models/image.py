from __future__ import annotations

from abc import abstractmethod
from typing import TYPE_CHECKING

from paradicms_etl.model import Model
from paradicms_etl.models.rights_mixin import RightsMixin

if TYPE_CHECKING:
    from rdflib import Literal, URIRef

    from paradicms_etl.models.image_data import ImageData
    from paradicms_etl.models.image_dimensions import ImageDimensions


class Image(Model, RightsMixin):
    class Builder(RightsMixin.Builder):
        @abstractmethod
        def add_thumbnail(self, thumbnail: URIRef) -> Image.Builder:
            raise NotImplementedError

        @abstractmethod
        def build(self) -> Image:
            raise NotImplementedError

        @abstractmethod
        def set_copyable(self, copyable: bool) -> Image.Builder:  # noqa: FBT001
            """
            Can this image be copied from its source (for GUI building), or does it have to be hot linked in order to use it?
            """
            raise NotImplementedError

        @abstractmethod
        def set_exact_dimensions(
            self, exact_dimensions: ImageDimensions
        ) -> Image.Builder:
            raise NotImplementedError

        @abstractmethod
        def set_src(self, src: str | ImageData | Literal | URIRef) -> Image.Builder:
            """
            src that can be used in an <img> tag; if not specified, defaults to URI
            """
            raise NotImplementedError

        @abstractmethod
        def set_title(self, title: str) -> Image.Builder:
            raise NotImplementedError

    @property
    @abstractmethod
    def copyable(self) -> bool:
        raise NotImplementedError

    @property
    @abstractmethod
    def exact_dimensions(self) -> ImageDimensions | None:
        raise NotImplementedError

    @property
    @abstractmethod
    def max_dimensions(self) -> ImageDimensions | None:
        raise NotImplementedError

    @abstractmethod
    def replacer(self) -> Builder:
        raise NotImplementedError

    @property
    @abstractmethod
    def src(self) -> ImageData | str | None:
        raise NotImplementedError

    @property
    @abstractmethod
    def thumbnail_uris(self) -> tuple[URIRef, ...]:
        pass
