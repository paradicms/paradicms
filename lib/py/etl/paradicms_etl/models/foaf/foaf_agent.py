from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib import FOAF, OWL, RDF, URIRef

from paradicms_etl.models.agent import Agent
from paradicms_etl.models.foaf.foaf_images_mixin import FoafImagesMixin
from paradicms_etl.models.foaf.foaf_model import FoafModel
from paradicms_etl.utils.safe_dict_update import safe_dict_update

if TYPE_CHECKING:
    from rdflib.resource import Resource


class FoafAgent(FoafModel, FoafImagesMixin, Agent):
    class Builder(FoafModel.Builder, FoafImagesMixin.Builder):
        def add_homepage(self, homepage: URIRef) -> FoafAgent.Builder:
            self.add(FOAF.homepage, homepage)
            return self

        def add_page(self, page: URIRef) -> FoafAgent.Builder:
            self.add(FOAF.page, page)
            return self

        def add_same_as(self, same_as: URIRef) -> FoafAgent.Builder:
            self.add(OWL.sameAs, same_as)
            return self

    def __init__(self, resource: Resource):
        resource.add(RDF.type, FOAF.Agent)
        FoafModel.__init__(self, resource)
        self.label

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            FoafModel.json_ld_context(),
            FoafImagesMixin.json_ld_context(),
        )

    @property
    def label(self) -> str:
        return self._required_label

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return FOAF.name
