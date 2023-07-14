from typing import Optional, Union, Tuple

from rdflib import DC, URIRef, Literal

from paradicms_etl.models.image import Image
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.models.linked_art.linked_art_rights_mixin import LinkedArtRightsMixin
from paradicms_etl.namespaces import CRM


class LinkedArtVisualItem(LinkedArtModel, LinkedArtRightsMixin, Image):
    class Builder(LinkedArtModel.Builder, LinkedArtRightsMixin.Builder, Image.Builder):
        def add_thumbnail(self, thumbnail: URIRef) -> "Image.Builder":
            raise NotImplementedError

        def build(self) -> "Image":
            raise NotImplementedError

        def set_copyable(self, copyable: bool) -> "Image.Builder":
            raise NotImplementedError

        def set_exact_dimensions(
            self, exact_dimensions: ImageDimensions
        ) -> "Image.Builder":
            raise NotImplementedError

        def set_src(
            self, src: Union[str, ImageData, Literal, URIRef]
        ) -> "Image.Builder":
            raise NotImplementedError

        def set_title(self, title: str) -> "Image.Builder":
            raise NotImplementedError

    @property
    def copyable(self) -> bool:
        return True

    @property
    def format(self) -> Optional[str]:
        return self._optional_value(DC["format"], self._map_term_to_str)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E36_Visual_Item

    def replacer(self) -> Builder:
        return self.Builder(self._resource)

    def src(self) -> Union[ImageData, str, None]:
        return None

    @property
    def thumbnail_uris(self) -> Tuple[URIRef, ...]:
        raise NotImplementedError
