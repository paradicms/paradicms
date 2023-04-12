from abc import abstractmethod
from typing import Optional, Union

from rdflib import URIRef

from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.rights_mixin import RightsMixin


class Image(NamedModel, RightsMixin):
    @property
    @abstractmethod
    def copyable(self) -> bool:
        pass

    @property
    @abstractmethod
    def depicts_uri(self) -> URIRef:
        pass

    @property
    @abstractmethod
    def original_image_uri(self) -> Optional[URIRef]:
        pass

    @abstractmethod
    def replace(
        self, *, copyable: Optional[bool] = None, src: Optional[str] = None
    ) -> "Image":
        pass

    @property
    @abstractmethod
    def src(self) -> Union[ImageData, str, None]:
        pass
