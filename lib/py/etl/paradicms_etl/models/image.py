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

        def copy_rights(self, other: Image) -> Image.Builder:
            for contributor in other.contributors:
                self.add_contributor(contributor)
            for creator in other.creators:
                self.add_creator(creator)
            for license_ in other.licenses:
                self.add_license(license_)
            for rights_holder in other.rights_holders:
                self.add_rights_holder(rights_holder)
            for rights_statement in other.rights_statements:
                self.add_rights_statement(rights_statement)
            return self

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
        def set_src(self, src: str | ImageData | Literal | URIRef) -> "Image.Builder":
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
