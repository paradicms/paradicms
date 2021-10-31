from typing import Optional

from rdflib import Literal, URIRef
from rdflib.namespace import FOAF

from paradicms_etl.models._agent import _Agent


class Organization(_Agent):
    @classmethod
    def from_fields(cls, *, name: str, uri: URIRef, page: Optional[URIRef] = None):
        resource = cls._create_resource(identifier=uri)
        resource.add(FOAF.name, Literal(name))
        if page is not None:
            resource.add(FOAF.page, page)
        return cls(resource)
