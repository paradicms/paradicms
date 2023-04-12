from abc import abstractmethod

from rdflib import URIRef

from paradicms_etl.models.event import Event


class WorkEvent(Event):
    @property
    @abstractmethod
    def work_uri(self) -> URIRef:
        pass
