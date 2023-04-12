from rdflib import DCTERMS, SKOS, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_named_model import CmsNamedModel
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsRightsStatement(CmsNamedModel, RightsStatement):
    """
    A rights statement. Adapted from the rightsstatements.org data model (https://github.com/rightsstatements/data-model).
    """

    LABEL_PROPERTY = SKOS.prefLabel

    class Builder(CmsNamedModel.Builder):
        def __init__(self, *, identifier: str, pref_label: str, uri: URIRef):
            CmsNamedModel.Builder.__init__(self, uri=uri)
            self.set(DCTERMS.identifier, identifier)
            self.set(SKOS.prefLabel, pref_label)

        def add_note(self, note: str) -> "CmsRightsStatement.Builder":
            self.add(SKOS.note, note)
            return self

        def add_scope_note(self, scope_note: str) -> "CmsRightsStatement.Builder":
            self.add(SKOS.scopeNote, scope_note)
            return self

        def build(self) -> "CmsRightsStatement":
            return CmsRightsStatement(self._resource)

        def set_definition(self, definition: str) -> "CmsRightsStatement.Builder":
            self.add(SKOS.definition, definition)
            return self

        def set_description(self, description: str) -> "CmsRightsStatement.Builder":
            self.add(DCTERMS.description, description)
            return self

    def __init__(self, resource: Resource):
        CmsNamedModel.__init__(self, resource)
        self.identifier
        self.pref_label

    @classmethod
    def builder(cls, *, identifier: str, pref_label: str, uri: URIRef) -> Builder:
        return cls.Builder(identifier=identifier, pref_label=pref_label, uri=uri)

    @property
    def identifier(self) -> str:
        return self._required_str_value(DCTERMS.identifier)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsNamedModel.json_ld_context(),
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
