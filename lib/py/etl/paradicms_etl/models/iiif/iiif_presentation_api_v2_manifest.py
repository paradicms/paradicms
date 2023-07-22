from typing import Tuple

from rdflib import URIRef, DCTERMS, RDFS
from rdflib.term import Identifier

from paradicms_etl.models.iiif.iiif_presentation_api_v2_namespace import (
    IiifPresentationApiV2Namespace,
)
from paradicms_etl.models.iiif.iiif_presentation_api_v2_sequence import (
    IiifPresentationApiV2Sequence,
)
from paradicms_etl.models.resource_backed_model import ResourceBackedModel

SC = IiifPresentationApiV2Namespace


class IiifPresentationApiV2Manifest(ResourceBackedModel):
    @property
    def attribution_label(self) -> str:
        return self._required_value(SC.attributionLabel, self._map_term_to_str)

    @property
    def has_sequences(self) -> Tuple[IiifPresentationApiV2Sequence, ...]:
        return tuple(
            IiifPresentationApiV2Sequence.from_rdf(
                self._resource.graph.resource(sequence)
            )
            for sequences in self._values(SC.hasSequences, self._map_term_to_collection)
            for sequence in sequences
            if isinstance(sequence, Identifier)
        )

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return RDFS.label

    @property
    def rights(self) -> URIRef:
        return self._required_value(DCTERMS.rights, self._map_term_to_uri)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return SC.Manifest
