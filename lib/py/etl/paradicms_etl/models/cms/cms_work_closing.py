from rdflib import URIRef

from paradicms_etl.models.work_event import WorkEvent


class WorkClosing(WorkEvent):
    class Builder(WorkEvent.Builder):
        def build(self) -> "WorkClosing":
            return WorkClosing(self._resource)

    @classmethod
    def builder(cls, *, uri: URIRef, work_uri: URIRef):
        return cls.Builder(uri=uri, work_uri=work_uri)
