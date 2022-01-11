from typing import Any

from paradicms_etl.models.work_event import WorkEvent


class WorkCreation(WorkEvent):
    @classmethod
    def from_fields(cls, *, temporal: Any = None):
        pass
        # resource = cls._create_resource()
        # if isinstance(temporal, Model):
        #     resource.add(DCTERMS.temporal, temporal.to_rdf(graph=resource))
        # elif isinstance(temporal, Node):
        #     resource.add(DCTERMS.temporal, temporal)
        # elif isinstance(temporal, )
