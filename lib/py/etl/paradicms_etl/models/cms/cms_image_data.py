from base64 import b64encode
from io import BytesIO
from typing import Any, Optional

from PIL import Image
from rdflib import DCTERMS, RDF, XSD, Graph, Literal, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_model import CmsModel
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.utils.uuid_urn import uuid_urn


class CmsImageData(CmsModel, ImageData):
    class __Builder(CmsModel.Builder):
        def __init__(self):
            CmsModel.Builder.__init__(self, Graph().resource(uuid_urn()))

        def add(self, *args, **kwds):
            CmsModel.Builder.add(self, *args, **kwds)
            return self

        def build(self) -> "CmsImageData":
            return CmsImageData(self._resource)

    @property
    def _format(self) -> str:
        return self._required_value(DCTERMS.format, self._map_term_to_str)

    @classmethod
    def from_pil_image(cls, pil_image: Image):
        buffer = BytesIO()
        pil_image.save(buffer, format="JPEG")
        return (
            cls.__Builder()
            .add(DCTERMS.format, Literal("image/jpeg"))
            .add(
                RDF.value,
                Literal(
                    b64encode(buffer.getvalue()).decode("ascii"),
                    datatype=XSD.base64Binary,
                ),
            )
            .build()
        )

    @classmethod
    def label_property_uri(cls) -> Optional[URIRef]:
        return None

    def to_json_ld(self) -> dict[str, Any]:
        return {
            "@id": str(self.uri),
            "@type": str(self.rdf_type_uri()),
            str(DCTERMS.format): self._format,
            str(RDF.value): {
                "@type": str(XSD.base64Binary),
                "@value": b64encode(self._value).decode("ascii"),
            },
        }

    def to_rdf(self, graph: Graph) -> Resource:
        for p in (
            DCTERMS.format,
            RDF.type,
            RDF.value,
        ):
            for o in self.resource.graph.objects(subject=self.uri, predicate=p):
                graph.add((self.uri, p, o))
        return graph.resource(self.uri)

    @property
    def _value(self) -> bytes:
        return self._required_value(RDF.value, self._map_term_to_bytes)
