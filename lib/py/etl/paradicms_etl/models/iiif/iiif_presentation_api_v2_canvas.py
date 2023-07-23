from typing import Tuple, Optional

from rdflib import URIRef, RDFS, DCTERMS
from rdflib.term import Identifier

from paradicms_etl.models.iiif.iiif_presentation_api_v2_namespace import (
    IiifPresentationApiV2Namespace,
)
from paradicms_etl.models.oa.oa_annotation import OaAnnotation
from paradicms_etl.models.resource_backed_model import ResourceBackedModel

SC = IiifPresentationApiV2Namespace


class IiifPresentationApiV2Canvas(ResourceBackedModel):
    @property
    def has_image_annotations(self) -> Tuple[OaAnnotation, ...]:
        return tuple(
            OaAnnotation.from_rdf(self._resource.graph.resource(annotation))
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
    def rights(self) -> Optional[URIRef]:
        return self._optional_value(DCTERMS.rights, self._map_term_to_uri)
