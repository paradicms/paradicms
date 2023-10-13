from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib import DCTERMS, RDFS, URIRef
from rdflib.term import Identifier

from paradicms_etl.models.iiif.iiif_presentation_api_v2_namespace import (
    IiifPresentationApiV2Namespace,
)
from paradicms_etl.models.oa.oa_annotation import OaAnnotation
from paradicms_etl.models.resource_backed_model import ResourceBackedModel

if TYPE_CHECKING:
    from rdflib.resource import Resource

SC = IiifPresentationApiV2Namespace


class IiifPresentationApiV2Canvas(ResourceBackedModel):
    @classmethod
    def from_rdf(cls, resource: Resource) -> IiifPresentationApiV2Canvas:
        return super().from_rdf(resource)  # type: ignore

    @property
    def has_image_annotations(self) -> tuple[OaAnnotation, ...]:
        return tuple(
            OaAnnotation.from_rdf(self.resource.graph.resource(annotation))
            for annotations in self._values(
                SC.hasImageAnnotations, self._map_term_to_collection
            )
            for annotation in annotations
            if isinstance(annotation, Identifier)
        )

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return RDFS.label

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return SC.Canvas

    @property
    def rights(self) -> URIRef | None:
        return self._optional_value(DCTERMS.rights, self._map_term_to_uri)
