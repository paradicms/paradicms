from rdflib import URIRef, RDFS

from paradicms_etl.models.iiif.iiif_presentation_api_namespace import (
    IiifPresentationApiNamespace,
)
from paradicms_etl.models.resource_backed_model import ResourceBackedModel

SC = IiifPresentationApiNamespace


class IiifPresentationApiCanvas(ResourceBackedModel):
    @classmethod
    def label_property_uri(cls) -> URIRef:
        return RDFS.label

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return SC.Canvas
