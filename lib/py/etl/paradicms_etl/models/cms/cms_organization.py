from typing import Optional

from rdflib import URIRef

from paradicms_etl.models.cms.cms_agent import CmsAgent
from paradicms_etl.models.organization import Organization


class CmsOrganization(CmsAgent, Organization):
    class Builder(CmsAgent.Builder):
        def build(self):
            return CmsOrganization(self._resource)

    @classmethod
    def builder(cls, *, name: str, uri: Optional[URIRef] = None) -> Builder:
        return cls.Builder(name=name, uri=uri)
