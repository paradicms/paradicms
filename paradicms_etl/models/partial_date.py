from dataclasses import dataclass
from typing import Optional

from rdflib import BNode, Graph, Literal, XSD
from rdflib.resource import Resource

from paradicms_etl.namespace import CMS


@dataclass(frozen=True)
class PartialDate:
    year: int
    day: Optional[int] = None
    month: Optional[int] = None

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = graph.resource(BNode())
        if self.day is not None:
            resource.add(CMS.partialDateDay, Literal(self.day, datatype=XSD.int))
        if self.month is not None:
            resource.add(CMS.partialDateMonth, Literal(self.month, datatype=XSD.int))
        self.resource.add(CMS.partialDateYear, Literal(self.year, datatype=XSD.int))
