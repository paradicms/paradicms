from dataclasses import dataclass
from typing import Optional

from rdflib import Graph, Literal, RDF, RDFS
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.namespace import CMS


@dataclass(frozen=True)
class PropertyDefinition(_NamedModel):
    label: str
    faceted: Optional[bool] = None
    full_text_searchable: Optional[bool] = None

    def to_rdf(self, *, graph: Graph, property_definitions) -> Resource:
        resource = _NamedModel.to_rdf(
            self, graph=graph, property_definitions=property_definitions
        )
        resource.add(RDFS.label, Literal(self.label))
        if self.faceted:
            resource.add(CMS.faceted, Literal(self.faceted))
        if self.full_text_searchable:
            resource.add(CMS.fullTextSearchable, Literal(self.full_text_searchable))
        return resource
