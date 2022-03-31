from typing import Optional, Tuple

from rdflib import URIRef, RDF
from rdflib.namespace import FOAF

from paradicms_etl.models.agent import Agent
from paradicms_etl.models.property import Property
from paradicms_etl.namespaces import CONTACT, CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder


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
            .add(RDF.type, CMS[cls.__name__])
            .add(FOAF.familyName, family_name)
            .add(FOAF.givenName, given_name)
            .add(FOAF.name, name)
            .add(FOAF.page, page)
            .add_properties(properties)
            .add(CONTACT.sortName, sort_name)
            .build()
        )
