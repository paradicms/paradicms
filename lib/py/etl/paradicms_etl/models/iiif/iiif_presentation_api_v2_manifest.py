from __future__ import annotations

from typing import TYPE_CHECKING, List, Tuple

from rdflib import DCTERMS, RDFS, URIRef
from rdflib.resource import Resource
from rdflib.term import Identifier

from paradicms_etl.models.dc.dc_image import DcImage
from paradicms_etl.models.iiif.iiif_presentation_api_v2_namespace import (
    IiifPresentationApiV2Namespace,
)
from paradicms_etl.models.iiif.iiif_presentation_api_v2_sequence import (
    IiifPresentationApiV2Sequence,
)
from paradicms_etl.models.resource_backed_model import ResourceBackedModel

if TYPE_CHECKING:
    from paradicms_etl.models.image import Image

SC = IiifPresentationApiV2Namespace


class IiifPresentationApiV2Manifest(ResourceBackedModel):
    @property
    def attribution_label(self) -> str:
        return self._required_value(SC.attributionLabel, self._map_term_to_str)

    @classmethod
    def from_rdf(cls, resource: Resource) -> IiifPresentationApiV2Manifest:
        return super().from_rdf(resource)  # type: ignore

    @property
    def has_sequences(self) -> Tuple[IiifPresentationApiV2Sequence, ...]:
        return tuple(
            IiifPresentationApiV2Sequence.from_rdf(
                self.resource.graph.resource(sequence)
            )
            for sequences in self._values(SC.hasSequences, self._map_term_to_collection)
            for sequence in sequences
            if isinstance(sequence, Identifier)
        )

    @property
    def images(self) -> Tuple[Image, ...]:
        """
        Convenience accessor for getting the Image models contained in the manifest.
        """

        attribution_label = self.attribution_label
        images: List[Image] = []
        for sequence in self.has_sequences:
            for canvas in sequence.has_canvases:
                for image_annotation in canvas.has_image_annotations:
                    image = image_annotation.has_body
                    assert isinstance(image, DcImage)

                    # Rebuild the Image so we don't carry along the entire IIIF manifest RDF in every Image
                    concise_image_builder = DcImage.builder(uri=image.uri)
                    # Reuse the exact dimensions
                    assert image.exact_dimensions
                    concise_image_builder.set_exact_dimensions(image.exact_dimensions)
                    # Propagate the rights and attribution label to the image RDF
                    assert not image.rights_holders
                    concise_image_builder.add_rights_holder(attribution_label)
                    if canvas.rights:
                        assert not image.rights_statements
                        concise_image_builder.add_rights_statement(canvas.rights)
                    images.append(concise_image_builder.build())
        return tuple(images)

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return RDFS.label

    @property
    def rights(self) -> URIRef:
        return self._required_value(DCTERMS.rights, self._map_term_to_uri)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return SC.Manifest
