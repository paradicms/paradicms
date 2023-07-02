from typing import Optional

from rdflib import URIRef, Graph, BNode, FOAF

from paradicms_etl.models.foaf.foaf_agent import FoafAgent
from paradicms_etl.models.organization import Organization


class FoafOrganization(FoafAgent, Organization):
    class Builder(FoafAgent.Builder):
        def build(self):
            return FoafOrganization(self._resource)

    @classmethod
    def builder(cls, *, name: str, uri: Optional[URIRef] = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else BNode()))
        builder.set(FOAF.name, name)
        return builder

    @property
    def label(self) -> str:
        return super().label

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return FOAF.Organization
