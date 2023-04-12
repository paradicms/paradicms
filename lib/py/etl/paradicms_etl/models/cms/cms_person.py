from rdflib import URIRef
from rdflib.namespace import FOAF

from paradicms_etl.models.cms.cms_agent import CmsAgent
from paradicms_etl.models.person import Person
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsPerson(CmsAgent, Person):
    class Builder(CmsAgent.Builder):
        def build(self):
            return CmsPerson(self._resource)

        def set_family_name(self, family_name: str) -> "CmsPerson.Builder":
            self.set(FOAF.familyName, family_name)
            return self

        def set_given_name(self, given_name: str) -> "CmsPerson.Builder":
            self.set(FOAF.givenName, given_name)
            return self

    @classmethod
    def builder(cls, *, name: str, uri: URIRef) -> Builder:
        return cls.Builder(name=name, uri=uri)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsAgent.json_ld_context(),
            {
                "familyName": {"@id": str(FOAF.familyName)},
                "givenName": {"@id": str(FOAF.givenName)},
            },
        )
