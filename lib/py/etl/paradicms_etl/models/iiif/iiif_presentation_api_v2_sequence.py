from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib.term import Identifier

from paradicms_etl.models.iiif.iiif_presentation_api_v2_canvas import (
    IiifPresentationApiV2Canvas,
)
from paradicms_etl.models.iiif.iiif_presentation_api_v2_namespace import (
    IiifPresentationApiV2Namespace,
)
from paradicms_etl.models.resource_backed_model import ResourceBackedModel

if TYPE_CHECKING:
    from rdflib import URIRef
    from rdflib.resource import Resource

SC = IiifPresentationApiV2Namespace


class IiifPresentationApiV2Sequence(ResourceBackedModel):
    @classmethod
    def from_rdf(cls, resource: Resource) -> IiifPresentationApiV2Sequence:
        return super().from_rdf(resource)  # type: ignore

    @property
    def has_canvases(self) -> tuple[IiifPresentationApiV2Canvas, ...]:
        return tuple(
            IiifPresentationApiV2Canvas.from_rdf(self.resource.graph.resource(canvas))
            for canvases in self._values(SC.hasCanvases, self._map_term_to_collection)
            for canvas in canvases
            if isinstance(canvas, Identifier)  # type: ignore
        )

    @classmethod
    def label_property_uri(cls) -> URIRef | None:
        return None

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return SC.Sequence
