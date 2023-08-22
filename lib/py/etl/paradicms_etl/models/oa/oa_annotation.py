from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib import DCMITYPE, RDF, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.dc.dc_image import DcImage
from paradicms_etl.models.oa.oa_namespace import OaNamespace
from paradicms_etl.models.resource_backed_model import ResourceBackedModel

if TYPE_CHECKING:
    from paradicms_etl.model import Model

OA = OaNamespace


class OaAnnotation(ResourceBackedModel):
    @classmethod
    def from_rdf(cls, resource: Resource) -> OaAnnotation:
        return super().from_rdf(resource)  # type: ignore  # noqa: PGH003

    @property
    def has_body(self) -> Model | None:
        for has_body_uri in self._values(OA.hasBody, self._map_term_to_uri):
            body_resource: Resource = self._resource.graph.resource(has_body_uri)
            body_rdf_type = body_resource.value(RDF.type)
            if isinstance(body_rdf_type, Resource):
                if body_rdf_type.identifier == DCMITYPE.Image:
                    return DcImage.from_rdf(body_resource)
                raise NotImplementedError(
                    f"unknown oa:hasBody rdf:type: {body_rdf_type.identifier}"
                )
        return None

    @classmethod
    def label_property_uri(cls) -> URIRef | None:
        return None

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return OA.Annotation
