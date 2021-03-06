from typing import Optional, Tuple

from rdflib import DCTERMS, SKOS, URIRef, RDF

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder


class RightsStatement(ResourceBackedNamedModel):
    """
    A rights statement. Adapted from the rightsstatements.org data model (https://github.com/rightsstatements/data-model).
    """

    def __init__(self, *args, **kwds):
        ResourceBackedNamedModel.__init__(self, *args, **kwds)
        self._resource.add(RDF.type, CMS[self.__class__.__name__])
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
    ) -> "RightsStatement":
        return cls(
            ResourceBuilder(uri)
            .add(RDF.type, CMS[cls.__name__])
            .add(SKOS.definition, definition)
            .add(DCTERMS.description, description)
            .add(DCTERMS.identifier, identifier)
            .add(SKOS.note, notes)
            .add(SKOS.prefLabel, pref_label)
            .add(SKOS.scopeNote, scope_note)
            .build()
        )

    @property
    def identifier(self) -> str:
        return self._required_str_value(DCTERMS.identifier)

    @property
    def label(self) -> str:
        return self.pref_label

    @property
    def pref_label(self) -> str:
        return self._required_str_value(SKOS.prefLabel)
