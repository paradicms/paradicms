from abc import abstractmethod
from typing import Tuple

from rdflib import URIRef

from paradicms_etl.models.work_event import WorkEvent


class WorkCreation(WorkEvent):
    @property
    @abstractmethod
    def creator_uris(self) -> Tuple[URIRef, ...]:
        raise NotImplementedError
