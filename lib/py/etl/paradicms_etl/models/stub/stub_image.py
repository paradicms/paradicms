from typing import Any

from rdflib import URIRef

from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.stub.stub_model import StubModel
from paradicms_etl.models.stub.stub_rights_mixin import StubRightsMixin


class StubImage(StubModel, StubRightsMixin, Image):
    @property
    def exact_dimensions(self) -> ImageDimensions | None:
        return None

    def copyable(self) -> bool:
        raise NotImplementedError(self.__class__.__name__)

    @property
    def max_dimensions(self) -> ImageDimensions | None:
        return None

    def replacer(self) -> Any:
        raise NotImplementedError(self.__class__)

    @property
    def src(self) -> None:
        return None

    @property
    def thumbnail_uris(self) -> tuple[URIRef, ...]:
        return ()
