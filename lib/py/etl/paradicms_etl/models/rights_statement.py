from abc import abstractmethod

from paradicms_etl.model import Model


class RightsStatement(Model):
    """
    A rights statement. Adapted from the rightsstatements.org data model (https://github.com/rightsstatements/data-model).
    """

    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError
