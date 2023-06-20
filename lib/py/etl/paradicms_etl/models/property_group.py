from abc import abstractmethod

from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.named_model import NamedModel


class PropertyGroup(NamedModel, ImagesMixin):
    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError
