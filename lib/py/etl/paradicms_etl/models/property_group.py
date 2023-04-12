from abc import abstractmethod

from paradicms_etl.models.named_model import NamedModel


class PropertyGroup(NamedModel):
    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError
