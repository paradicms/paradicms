from rdflib import URIRef

from paradicms_etl.models.work_event import WorkEvent


class WorkOpening(WorkEvent):
    class Builder(WorkEvent.Builder):
        def build(self) -> "WorkOpening":
            return WorkOpening(self._resource)

    @classmethod
    def builder(cls, *, uri: URIRef, work_uri: URIRef):
        return cls.Builder(uri=uri, work_uri=work_uri)
