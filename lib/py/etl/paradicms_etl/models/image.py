from abc import abstractmethod
from typing import Optional, Union

from rdflib import URIRef, Literal

from paradicms_etl.models.cms.cms_image_data import CmsImageData
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.rights_mixin import RightsMixin


class Image(NamedModel, RightsMixin):
    class Builder(RightsMixin.Builder):
        @abstractmethod
        def build(self) -> "Image":
            raise NotImplementedError

        @abstractmethod
        def set_copyable(self, copyable: bool) -> "Image.Builder":
            raise NotImplementedError

        @abstractmethod
        def set_source(self, source: URIRef) -> "Image.Builder":
            raise NotImplementedError

        @abstractmethod
        def set_src(
            self, src: Union[str, CmsImageData, Literal, URIRef]
        ) -> "Image.Builder":
            raise NotImplementedError

        @abstractmethod
        def set_title(self, title: str) -> "Image.Builder":
            raise NotImplementedError

    @property
    @abstractmethod
    def copyable(self) -> bool:
        raise NotImplementedError

    @property
    @abstractmethod
    def depicts_uri(self) -> URIRef:
        raise NotImplementedError

    @property
    @abstractmethod
    def original_image_uri(self) -> Optional[URIRef]:
        raise NotImplementedError

    @abstractmethod
    def replacer(self) -> Builder:
        raise NotImplementedError

    @property
    @abstractmethod
    def src(self) -> Union[ImageData, str, None]:
        raise NotImplementedError
