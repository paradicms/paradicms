from typing import Optional, Tuple

from rdflib import URIRef
from rdflib.term import Identifier

from paradicms_etl.models.iiif.iiif_presentation_api_canvas import (
    IiifPresentationApiCanvas,
)
from paradicms_etl.models.iiif.iiif_presentation_api_namespace import (
    IiifPresentationApiNamespace,
)
from paradicms_etl.models.resource_backed_model import ResourceBackedModel

SC = IiifPresentationApiNamespace


class IiifPresentationApiSequence(ResourceBackedModel):
    @property
    def has_canvases(self) -> Tuple[IiifPresentationApiCanvas, ...]:
        return tuple(
            IiifPresentationApiCanvas.from_rdf(self._resource.graph.resource(canvas))
            for canvases in self._values(SC.hasCanvases, self._map_term_to_collection)
            for canvas in canvases
            if isinstance(canvas, Identifier)
        )

    @classmethod
    def label_property_uri(cls) -> Optional[URIRef]:
        return None

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return SC.Sequence
