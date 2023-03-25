from base64 import b64encode
from io import BytesIO
from typing import Dict, Any

from PIL import Image
from rdflib import DCTERMS, RDF, Literal, XSD, BNode

from paradicms_etl.models.resource_backed_model import ResourceBackedModel


class ImageData(ResourceBackedModel):
    class __Builder(ResourceBackedModel.Builder):
        def build(self) -> "ImageData":
            return ImageData(self._resource)

    @property
    def __format(self) -> str:
        return self._required_str_value(DCTERMS.format)

    @classmethod
    def from_pil_image(cls, pil_image: Image):
        buffer = BytesIO()
        pil_image.save(buffer, format="JPEG")
        return (
            cls.__Builder(BNode())
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

    def to_json_ld(self) -> Dict[str, Any]:
        return {
            str(DCTERMS.format): self.__format,
            str(RDF.value): {
                "@type": str(XSD.base64Binary),
                "@value": b64encode(self.__value).decode("ascii"),
            },
        }

    def to_pil_image(self) -> Image:
        format_ = self.__format
        for pil_format, mime_type in Image.MIME.items():
            if mime_type == format_:
                return Image.open(BytesIO(self.__value), formats=(pil_format,)).copy()
        raise ValueError(f"unable to convert MIME type {format_} to PIL format")

    @property
    def __value(self) -> bytes:
        return self._required_bytes_value(RDF.value)
