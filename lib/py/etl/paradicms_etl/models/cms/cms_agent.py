from rdflib import FOAF, RDF, DCTERMS, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.agent import Agent
from paradicms_etl.models.cms.cms_named_model import CmsNamedModel
from paradicms_etl.namespaces import CMS, CONTACT
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsAgent(CmsNamedModel, Agent):
    LABEL_PROPERTY = FOAF.name

    class Builder(CmsNamedModel.Builder):
        def __init__(self, *, name: str, uri: URIRef):
            CmsNamedModel.Builder.__init__(self, uri)
            self.set(FOAF.name, name)

        def add_page(self, page: URIRef) -> "Agent.Builder":
            self.add(FOAF.page, page)
            return self

        def add_relation(self, relation: URIRef) -> "Agent.Builder":
            self.add(DCTERMS.relation, relation)
            return self

        def set_sort_name(self, sort_name: str) -> "Agent.Builder":
            self.set(CONTACT.sortName, sort_name)
            return self

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS.Agent)
        CmsNamedModel.__init__(self, resource)
        self.name

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsNamedModel.json_ld_context(),
            {
                "name": {"@id": str(FOAF.name)},
                "page": {"@id": str(FOAF.page)},
                "relation": {"@id": str(DCTERMS.relation), "@type": "@id"},
                "sortName": {"@id": str(CONTACT.sortName)},
            },
        )

    @property
    def label(self) -> str:
        return self.name

    @property
    def name(self) -> str:
        return self._required_str_value(FOAF.name)
