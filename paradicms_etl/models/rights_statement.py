from dataclasses import dataclass
from typing import Optional, Tuple

from rdflib import DCTERMS, Graph, Literal, SKOS
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel


@dataclass(frozen=True)
class RightsStatement(_NamedModel):
    """
    A rights statement. Adapted from the rightsstatements.org data model (https://github.com/rightsstatements/data-model).
    """

    identifier: str
    pref_label: str
    definition: Optional[str] = None
    description: Optional[str] = None
    notes: Tuple[str, ...] = ()
    scope_note: Optional[str] = None

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _NamedModel.to_rdf(self, graph=graph)
        if self.definition is not None:
            resource.add(SKOS.definition, Literal(self.definition))
        resource.add(DCTERMS.description, Literal(self.description))
        resource.add(DCTERMS.identifier, Literal(self.identifier))
        for note in self.notes:
            resource.add(SKOS.note, Literal(note))
        resource.add(SKOS.prefLabel, Literal(self.pref_label))
        if self.scope_note is not None:
            resource.add(SKOS.scopeNote, Literal(self.scope_note))
