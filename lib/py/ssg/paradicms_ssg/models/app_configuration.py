from abc import abstractmethod
from typing import Optional

from paradicms_etl.model import Model


class AppConfiguration(Model):
    @property
    @abstractmethod
    def app(self) -> Optional[str]:
        raise NotImplementedError
