from typing import Optional

from rdflib import Literal, URIRef
from rdflib.namespace import FOAF

from paradicms_etl.models._agent import _Agent
from paradicms_etl.namespace import CONTACT


class Person(_Agent):
    @classmethod
    def from_fields(
        cls,
        *,
        name: str,
        uri: URIRef,
        family_name: Optional[str] = None,
        given_name: Optional[str] = None,
        page: Optional[URIRef] = None,
        sort_name: Optional[str] = None,
    ):
        resource = cls._create_resource(identifier=uri)
        if family_name is not None:
            resource.add(FOAF.familyName, Literal(family_name))
        if given_name is not None:
            resource.add(FOAF.givenName, Literal(given_name))
        if page is not None:
            resource.add(FOAF.page, page)
        resource.add(FOAF.name, Literal(name))
        if sort_name is not None:
            resource.add(CONTACT.sortName, Literal(sort_name))
        return cls(resource)
