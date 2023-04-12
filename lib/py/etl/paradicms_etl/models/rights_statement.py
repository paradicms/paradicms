from abc import abstractmethod

from paradicms_etl.models.named_model import NamedModel


class RightsStatement(NamedModel):
    """
    A rights statement. Adapted from the rightsstatements.org data model (https://github.com/rightsstatements/data-model).
    """

    @property
    @abstractmethod
    def identifier(self) -> str:
        raise NotImplementedError

    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError
