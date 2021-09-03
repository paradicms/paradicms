from typing import Optional, Tuple

from rdflib import DCTERMS, Literal, SKOS, URIRef

from paradicms_etl.models._named_model import _NamedModel


class RightsStatement(_NamedModel):
    """
    A rights statement. Adapted from the rightsstatements.org data model (https://github.com/rightsstatements/data-model).
    """

    def __init__(
        self,
        *,
        identifier: str,
        pref_label: str,
        uri: URIRef,
        definition: Optional[str] = None,
        description: Optional[str] = None,
        notes: Tuple[str, ...] = (),
        scope_note: Optional[str] = None,
    ):
        _NamedModel.__init__(self, uri=uri)
        if definition is not None:
            self.resource.add(SKOS.definition, Literal(definition))
        self.resource.add(DCTERMS.description, Literal(description))
        self.resource.add(DCTERMS.identifier, Literal(identifier))
        for note in notes:
            self.resource.add(SKOS.note, Literal(note))
        self.resource.add(SKOS.prefLabel, Literal(pref_label))
        if scope_note is not None:
            self.resource.add(SKOS.scopeNote, Literal(scope_note))
