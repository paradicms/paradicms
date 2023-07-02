from base64 import b64encode
from io import BytesIO
from typing import Dict, Any, Optional

from PIL import Image
from rdflib import DCTERMS, RDF, Literal, XSD, BNode, Graph, URIRef

from paradicms_etl.models.cms.cms_model import CmsModel
from paradicms_etl.models.image_data import ImageData


class CmsImageData(CmsModel, ImageData):
    class __Builder(CmsModel.Builder):
        def __init__(self):
            CmsModel.Builder.__init__(self, Graph().resource(BNode()))

        def add(self, *args, **kwds):
            CmsModel.Builder.add(self, *args, **kwds)
            return self

        def build(self) -> "CmsImageData":
            return CmsImageData(self._resource)

    @property
    def _format(self) -> str:
        return self._required_value(DCTERMS.format, self._map_str_value)

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

    def to_json_ld(self) -> Dict[str, Any]:
        return {
            str(DCTERMS.format): self._format,
            str(RDF.value): {
                "@type": str(XSD.base64Binary),
                "@value": b64encode(self._value).decode("ascii"),
            },
        }

    @property
    def _value(self) -> bytes:
        return self._required_value(RDF.value, self._map_bytes_value)
