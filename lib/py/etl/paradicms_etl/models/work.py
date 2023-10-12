from abc import abstractmethod

from paradicms_etl.model import Model
from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.text import Text


class Work(Model, ImagesMixin):
    """
    Model of a work such as a painting or a garment.

    This is the same concept as Work in VRA Core.
    """

    class Builder(ImagesMixin.Builder):
        @abstractmethod
        def build(self) -> "Work":
            raise NotImplementedError

    @property
    @abstractmethod
    def description(self) -> str | Text | None:
        raise NotImplementedError

    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError

    @abstractmethod
    def replacer(self) -> Builder:
        raise NotImplementedError
