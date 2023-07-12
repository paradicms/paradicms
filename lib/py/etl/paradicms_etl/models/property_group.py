from abc import abstractmethod

from paradicms_etl.model import Model
from paradicms_etl.models.images_mixin import ImagesMixin


class PropertyGroup(Model, ImagesMixin):
    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError
