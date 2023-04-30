from abc import abstractmethod
from io import BytesIO

from PIL import Image

__import__("PIL.JpegImagePlugin")

from paradicms_etl.model import Model


class ImageData(Model):
    @property
    @abstractmethod
    def _format(self) -> str:
        raise NotImplementedError

    @classmethod
    @abstractmethod
    def from_pil_image(cls, pil_image: Image):
        raise NotImplementedError

    def to_pil_image(self) -> Image:
        format_ = self._format
        for pil_format, mime_type in Image.MIME.items():
            if mime_type == format_:
                return Image.open(BytesIO(self._value), formats=(pil_format,)).copy()
        raise ValueError(
            f"unable to convert MIME type {format_} to PIL format (available PIL MIME types and formats: {' '.join(pil_format + ':' + mime_type for pil_format, mime_type in Image.MIME.items())})"
        )

    @property
    @abstractmethod
    def _value(self) -> bytes:
        raise NotImplementedError
