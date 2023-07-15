from typing import Optional

from rdflib import URIRef, RDF, DCMITYPE
from rdflib.resource import Resource

from paradicms_etl.model import Model
from paradicms_etl.models.dc.dc_image import DcImage
from paradicms_etl.models.oa.oa_namespace import OaNamespace
from paradicms_etl.models.resource_backed_model import ResourceBackedModel

OA = OaNamespace


class OaAnnotation(ResourceBackedModel):
    @property
    def has_body(self) -> Optional[Model]:
        for has_body_uri in self._values(OA.hasBody, self._map_term_to_uri):
            body_resource: Resource = self._resource.graph.resource(has_body_uri)
            body_rdf_type = body_resource.value(RDF.type)
            if isinstance(body_rdf_type, Resource):
                if body_rdf_type.identifier == DCMITYPE.Image:
                    return DcImage.from_rdf(body_resource)
                else:
                    raise NotImplementedError(
                        f"unknown oa:hasBody rdf:type: {body_rdf_type.identifier}"
                    )
        return None

    @classmethod
    def label_property_uri(cls) -> Optional[URIRef]:
        return None

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return OA.Annotation
