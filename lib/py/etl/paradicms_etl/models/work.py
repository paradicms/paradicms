from abc import abstractmethod

from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.rights_mixin import RightsMixin


class Work(Model, ImagesMixin, RightsMixin):  # type: ignore
    """
    Model of a work such as a painting or a garment.

    This is the same concept as Work in VRA Core.
    """

    class Builder(ImagesMixin.Builder, RightsMixin.Builder):
        @abstractmethod
        def build(self) -> "Work":
            raise NotImplementedError

    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError

    @abstractmethod
    def replacer(self) -> Builder:
        raise NotImplementedError
