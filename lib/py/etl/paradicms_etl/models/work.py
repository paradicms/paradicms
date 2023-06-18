from abc import abstractmethod
from typing import Union

from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.text import Text


class Work(NamedModel, ImagesMixin, RightsMixin):  # type: ignore
    """
    Model of a work such as a painting or a garment.

    This is the same concept as Work in VRA Core.
    """

    @property
    @abstractmethod
    def description(self) -> Union[str, Text, None]:
        raise NotImplementedError

    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError
