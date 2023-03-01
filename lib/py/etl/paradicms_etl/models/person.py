from typing import Optional, Tuple

from rdflib import URIRef, DCTERMS
from rdflib.namespace import FOAF

from paradicms_etl.models.agent import Agent
from paradicms_etl.models.property import Property
from paradicms_etl.namespaces import CONTACT
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Person(Agent):
    @classmethod
    def from_fields(
        cls,
        *,
        name: str,
        uri: URIRef,
        family_name: Optional[str] = None,
        given_name: Optional[str] = None,
        page: Optional[URIRef] = None,
        properties: Tuple[Property, ...] = (),
        sort_name: Optional[str] = None,
    ) -> "Person":
        return cls(
            ResourceBuilder(uri)
            .add(FOAF.familyName, family_name)
            .add(FOAF.givenName, given_name)
            .add(FOAF.name, name)
            .add(FOAF.page, page)
            .add_properties(properties)
            .add(CONTACT.sortName, sort_name)
            .build()
        )

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            Agent.json_ld_context(),
            {
                "familyName": {"@id": str(FOAF.familyName)},
                "givenName": {"@id": str(FOAF.givenName)},
                "page": {"@id": str(FOAF.page)},
                "relation": {"@id": str(DCTERMS.relation), "@type": "@id"},
                "sortName": {"@id": str(CONTACT.sortName)},
            },
        )
