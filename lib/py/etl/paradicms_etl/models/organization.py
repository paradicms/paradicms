from typing import Optional

from rdflib import URIRef, RDF
from rdflib.namespace import FOAF
from rdflib.resource import Resource

from paradicms_etl.models.agent import Agent
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder


class Organization(Agent):
    DEFAULT_NAMESPACE = FOAF
    JSON_LD_CONTEXT = {"@vocab": str(FOAF)}
    LABEL_PROPERTY = FOAF.name

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS[self.__class__.__name__])
        Agent.__init__(self, resource)

    @classmethod
    def from_fields(
        cls, *, name: str, uri: URIRef, page: Optional[URIRef] = None
    ) -> "Organization":
        return cls(
            ResourceBuilder(uri).add(FOAF.name, name).add(FOAF.page, page).build()
        )
