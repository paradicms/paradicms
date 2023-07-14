from typing import Dict, Any

from rdflib import DCTERMS, SKOS
from rdflib.resource import Resource

from paradicms_etl.models.dc.dc_rights_statement import DcRightsStatement
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class RightsStatementsDotOrgRightsStatement(DcRightsStatement, RightsStatement):
    class Builder(DcRightsStatement.Builder):
        pass

    def __init__(self, resource: Resource):
        DcRightsStatement.__init__(self, resource)
        self.identifier
        self.pref_label

    @classmethod
    def json_ld_context(cls) -> Dict[str, Any]:
        return safe_dict_update(
            DcRightsStatement.json_ld_context(),
            {
                "definition": str(SKOS.definition),
                "description": str(DCTERMS.description),
                "identifier": str(DCTERMS.identifier),
                "note": str(SKOS.note),
                "prefLabel": str(SKOS.prefLabel),
                "scopeNote": str(SKOS.scopeNote),
            },
        )

    @property
    def identifier(self) -> str:
        return self._required_value(DCTERMS.identifier, self._map_term_to_str)

    @property
    def label(self) -> str:
        return self.pref_label

    @property
    def pref_label(self) -> str:
        return self._required_value(SKOS.prefLabel, self._map_term_to_str)
