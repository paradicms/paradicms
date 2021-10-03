from typing import Optional, Tuple

from rdflib import DCTERMS, Literal, SKOS, URIRef

from paradicms_etl.models._named_model import _NamedModel


class RightsStatement(_NamedModel):
    """
    A rights statement. Adapted from the rightsstatements.org data model (https://github.com/rightsstatements/data-model).
    """

    def __init__(self, *args, **kwds):
        _NamedModel.__init__(self, *args, **kwds)
        self.identifier
        self.pref_label

    @classmethod
    def from_fields(
        cls,
        *,
        identifier: str,
        pref_label: str,
        uri: URIRef,
        definition: Optional[str] = None,
        description: Optional[str] = None,
        notes: Tuple[str, ...] = (),
        scope_note: Optional[str] = None,
    ):
        resource = cls._create_resource(identifier=uri)
        if definition is not None:
            resource.add(SKOS.definition, Literal(definition))
        resource.add(DCTERMS.description, Literal(description))
        resource.add(DCTERMS.identifier, Literal(identifier))
        for note in notes:
            resource.add(SKOS.note, Literal(note))
        resource.add(SKOS.prefLabel, Literal(pref_label))
        if scope_note is not None:
            resource.add(SKOS.scopeNote, Literal(scope_note))
        return cls(resource)

    @property
    def identifier(self) -> str:
        return self._required_str_value(DCTERMS.identifier)

    @property
    def label(self) -> str:
        return self.pref_label

    @property
    def pref_label(self) -> str:
        return self._required_str_value(SKOS.prefLabel)
