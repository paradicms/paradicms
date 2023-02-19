from typing import Optional, Tuple

from rdflib import URIRef, RDF
from rdflib.namespace import FOAF
from rdflib.resource import Resource

from paradicms_etl.models.agent import Agent
from paradicms_etl.models.property import Property
from paradicms_etl.namespaces import CONTACT, CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Person(Agent):
    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS[self.__class__.__name__])
        Agent.__init__(self, resource)

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
                "name": {"@id": str(FOAF.name)},
                "page": {"@id": str(FOAF.page)},
                "sortName": {"@id": str(CONTACT.sortName)},
            }
        )
