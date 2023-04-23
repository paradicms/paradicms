from abc import abstractmethod

from paradicms_etl.model import Model


class Agent(Model):
    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError
