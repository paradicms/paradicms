from typing import Optional, Tuple

from rdflib import DCTERMS, SKOS, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class RightsStatement(ResourceBackedNamedModel):
    """
    A rights statement. Adapted from the rightsstatements.org data model (https://github.com/rightsstatements/data-model).
    """

    LABEL_PROPERTY = SKOS.prefLabel

    def __init__(self, resource: Resource):
        ResourceBackedNamedModel.__init__(self, resource)
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

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            {
                "definition": {"@id": str(SKOS.definition)},
                "description": {"@id": str(DCTERMS.description)},
                "identifier": {"@id": str(DCTERMS.identifier)},
                "note": {"@id": str(SKOS.note)},
                "prefLabel": {"@id": str(SKOS.prefLabel)},
                "scopeNote": {"@id": str(SKOS.scopeNote)},
            },
        )

    @property
    def label(self) -> str:
        return self.pref_label

    @property
    def pref_label(self) -> str:
        return self._required_str_value(SKOS.prefLabel)
