from abc import abstractmethod

from paradicms_etl.model import Model


class License(Model):
    """
    A license. Adapted from the creativecommons.org license RDF (https://github.com/creativecommons/cc.licenserdf).
    """

    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError
