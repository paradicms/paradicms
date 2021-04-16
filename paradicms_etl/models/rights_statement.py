from dataclasses import dataclass
from typing import Optional, Tuple

from rdflib import DCTERMS, Graph, Literal, SKOS, URIRef
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel


@dataclass(frozen=True)
class RightsStatement(_NamedModel):
    """
    A rights statement. Adapted from the rightsstatements.org data model (https://github.com/rightsstatements/data-model).
    """

    pref_label: str
    definition: Optional[str] = None
    description: Optional[str] = None
    notes: Tuple[str, ...] = ()
    scope_note: Optional[str] = None

    @classmethod
    def from_rdf(cls, resource: Resource):
        definition_literal = resource.value(SKOS.definition)
        definition = (
            definition_literal.value
            if isinstance(definition_literal, Literal)
            else None
        )

        description_literal = resource.value(DCTERMS.description)
        description = (
            description_literal.value
            if isinstance(description_literal, Literal)
            else None
        )

        pref_label_literal = resource.value(SKOS.prefLabel)
        if not isinstance(pref_label_literal, Literal):
            raise ValueError("rights statement must have literal skos:prefLabel")
        pref_label = pref_label_literal.value

        notes = []
        for note_literal in resource.objects(SKOS.note):
            if isinstance(note_literal, Literal):
                notes.append(note_literal.value)

        scope_note_literal = resource.value(SKOS.scopeNote)
        scope_note = (
            scope_note_literal.value
            if isinstance(scope_note_literal, Literal)
            else None
        )

        assert isinstance(resource.identifier, URIRef)

        return cls(
            definition=definition,
            description=description,
            pref_label=pref_label,
            notes=tuple(notes),
            scope_note=scope_note,
            uri=resource.identifier,
        )

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _NamedModel.to_rdf(graph=graph)
        if self.definition is not None:
            resource.add(SKOS.definition, Literal(self.definition))
        resource.add(DCTERMS.description, Literal(self.description))
        for note in self.notes:
            resource.add(SKOS.note, Literal(note))
        resource.add(SKOS.prefLabel, Literal(self.pref_label))
        if self.scope_note is not None:
            resource.add(SKOS.scopeNote, Literal(self.scope_note))
