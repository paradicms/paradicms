from rdflib import FOAF, RDF, DCTERMS, URIRef
from rdflib.resource import Resource

from namespaces import CONTACT
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Agent(ResourceBackedNamedModel):
    LABEL_PROPERTY = FOAF.name

    class Builder(ResourceBackedNamedModel.Builder):
        def __init__(self, *, name: str, uri: URIRef):
            ResourceBackedNamedModel.__init__(self, uri)
            self.set(FOAF.name, name)

        def add_page(self, page: URIRef) -> "Builder":
            self.add(FOAF.page, page)
            return self

        def add_relation(self, relation: URIRef) -> "Builder":
            self.add(DCTERMS.relation, relation)
            return self

        def set_sort_name(self, sort_name: str) -> "Builder":
            self.set(CONTACT.sortName, sort_name)
            return self

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS.Agent)
        ResourceBackedNamedModel.__init__(self, resource)
        self.name

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
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
