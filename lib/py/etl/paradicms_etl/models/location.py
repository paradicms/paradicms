from abc import abstractmethod
from dataclasses import dataclass

from paradicms_etl.model import Model


class Location(Model):
    """
    Abstract base class for spatial locations.
    """

    @dataclass(frozen=True)
    class Centroid:
        latitude: float
        longitude: float

    @property
    @abstractmethod
    def centroid(self) -> Centroid | None:
        raise NotImplementedError
