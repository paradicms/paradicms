from abc import abstractmethod
from typing import Union

from rdflib import URIRef

from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.text import Text
from paradicms_etl.models.work_event import WorkEvent


class Work(NamedModel, ImagesMixin, RightsMixin):  # type: ignore
    """
    Model of a work such as a painting or a garment.

    This is the same concept as Work in VRA Core.
    """

    class Builder(ImagesMixin.Builder, RightsMixin.Builder):
        @abstractmethod
        def add_event(self, event: Union[WorkEvent, URIRef]):
            raise NotImplementedError

        @abstractmethod
        def build(self) -> "Work":
            raise NotImplementedError

    @property
    @abstractmethod
    def description(self) -> Union[str, Text, None]:
        raise NotImplementedError

    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError

    @abstractmethod
    def replacer(self) -> Builder:
        raise NotImplementedError
