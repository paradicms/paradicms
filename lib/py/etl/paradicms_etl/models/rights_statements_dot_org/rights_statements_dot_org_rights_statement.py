from rdflib import DCTERMS, SKOS, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_named_model import CmsNamedModel
from paradicms_etl.models.dc.dc_rights_statement import DcRightsStatement
from paradicms_etl.models.rights_statement import RightsStatement


class RightsStatementsDotOrgRightsStatement(DcRightsStatement, RightsStatement):
    def __init__(self, resource: Resource):
        CmsNamedModel.__init__(self, resource)
        self.identifier
        self.pref_label

    @property
    def identifier(self) -> str:
        return self._required_value(DCTERMS.identifier, self._map_str_value)

    @property
    def label(self) -> str:
        return self.pref_label

    @property
    def pref_label(self) -> str:
        return self._required_value(SKOS.prefLabel, self._map_str_value)

    @property
    def uri(self) -> URIRef:
        return super().uri
