from abc import abstractmethod
from typing import Optional

from paradicms_etl.models.named_model import NamedModel


class License(NamedModel):
    """
    A license. Adapted from the creativecommons.org license RDF (https://github.com/creativecommons/cc.licenserdf).
    """

    @property
    @abstractmethod
    def identifier(self) -> str:
        pass

    @property
    @abstractmethod
    def label(self) -> str:
        pass

    @property
    @abstractmethod
    def version(self) -> Optional[str]:
        pass
