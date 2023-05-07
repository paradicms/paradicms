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
        raise NotImplementedError

    @property
    @abstractmethod
    def depicts_uri(self) -> URIRef:
        raise NotImplementedError

    @property
    @abstractmethod
    def original_image_uri(self) -> Optional[URIRef]:
        raise NotImplementedError

    @property
    @abstractmethod
    def src(self) -> Union[ImageData, str, None]:
        raise NotImplementedError
