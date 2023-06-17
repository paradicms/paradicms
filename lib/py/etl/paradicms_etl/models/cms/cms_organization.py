from typing import Optional

from rdflib import URIRef, Graph, BNode, FOAF

from paradicms_etl.models.cms.cms_agent import CmsAgent
from paradicms_etl.models.organization import Organization


class CmsOrganization(CmsAgent, Organization):
    class Builder(CmsAgent.Builder):
        def add_page(self, page: URIRef) -> "CmsOrganization.Builder":
            super().add_page(page)
            return self

        def build(self):
            return CmsOrganization(self._resource)

    @classmethod
    def builder(cls, *, name: str, uri: Optional[URIRef] = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else BNode()))
        builder.set(FOAF.name, name)
        return builder
