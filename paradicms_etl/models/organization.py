from typing import Optional

from rdflib import URIRef, RDF
from rdflib.namespace import FOAF

from paradicms_etl.models.agent import Agent
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder


class Organization(Agent):
    @classmethod
    def from_fields(
        cls, *, name: str, uri: URIRef, page: Optional[URIRef] = None
    ) -> "Organization":
        return cls(
            ResourceBuilder(uri)
            .add(RDF.type, CMS[cls.__name__])
            .add(FOAF.name, name)
            .add(FOAF.page, page)
            .build()
        )
