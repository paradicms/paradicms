from typing import Optional

from rdflib import URIRef, Graph, FOAF

from paradicms_etl.models.foaf.foaf_agent import FoafAgent
from paradicms_etl.models.organization import Organization
from paradicms_etl.utils.uuid_urn import uuid_urn


class FoafOrganization(FoafAgent, Organization):
    class Builder(FoafAgent.Builder):
        def build(self):
            return FoafOrganization(self._resource)

    @classmethod
    def builder(cls, *, name: str, uri: Optional[URIRef] = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))
        builder.set(FOAF.name, name)
        return builder

    @property
    def label(self) -> str:
        return super().label

    def replacer(self) -> Builder:
        return self.Builder(self._resource)
