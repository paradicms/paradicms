from abc import abstractmethod

from paradicms_etl.model import Model


class AppConfiguration(Model):
    @property
    @abstractmethod
    def app(self) -> str | None:
        raise NotImplementedError
