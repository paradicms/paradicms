from abc import abstractmethod

from paradicms_etl.models.named_model import NamedModel


class Agent(NamedModel):
    @property
    @abstractmethod
    def label(self) -> str:
        return self.name
