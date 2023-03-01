from typing import Optional

from rdflib import URIRef
from rdflib.namespace import FOAF

from paradicms_etl.models.agent import Agent
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Organization(Agent):
    @classmethod
    def from_fields(
        cls, *, name: str, uri: URIRef, page: Optional[URIRef] = None
    ) -> "Organization":
        return cls(
            ResourceBuilder(uri).add(FOAF.name, name).add(FOAF.page, page).build()
        )

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            Agent.json_ld_context(), {"page": {"@id": str(FOAF.page)}}
        )
