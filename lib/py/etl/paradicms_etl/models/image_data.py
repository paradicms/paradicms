from __future__ import annotations

from abc import abstractmethod
from io import BytesIO
from typing import Any

from PIL import Image

from paradicms_etl.model import Model

__import__("PIL.JpegImagePlugin")


class ImageData(Model):
    @property
    @abstractmethod
    def _format(self) -> str:
        raise NotImplementedError

    @classmethod
    @abstractmethod
    def from_pil_image(cls, pil_image: Image) -> ImageData:  # type: ignore
        raise NotImplementedError

    @abstractmethod
    def to_json_ld(self) -> dict[str, Any]:
        raise NotImplementedError

    def to_pil_image(self) -> Image:  # type: ignore
        format_ = self._format
        for pil_format, mime_type in Image.MIME.items():
            if mime_type == format_:
                return Image.open(BytesIO(self._value), formats=(pil_format,)).copy()  # type: ignore
        raise ValueError(
            f"unable to convert MIME type {format_} to PIL format (available PIL MIME types and formats: {' '.join(pil_format + ':' + mime_type for pil_format, mime_type in Image.MIME.items())})"
        )

    @property
    @abstractmethod
    def _value(self) -> bytes:
        raise NotImplementedError
