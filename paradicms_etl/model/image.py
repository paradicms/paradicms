from datetime import datetime
from typing import Optional

from paradicms_etl.model._model import _Model
from paradicms_etl.namespace import CMS, EXIF
from rdflib.namespace import DCTERMS


class Image(_Model):
    @property
    def created(self) -> Optional[datetime]:
        return self._get_single_value(DCTERMS.created, datetime)

    @created.setter
    def created(self, value: datetime):
        self._set_single_value(DCTERMS.created, value)

    @property
    def format(self) -> Optional[str]:
        return self._get_single_value(DCTERMS["format"], str)

    @format.setter
    def format(self, value: str):
        self._set_single_value(DCTERMS["format"], value)

    @property
    def height(self) -> Optional[int]:
        return self._get_single_value(EXIF.height, int)

    @height.setter
    def height(self, value: int):
        self._set_single_value(EXIF.height, value)

    @property
    def max_height(self) -> Optional[int]:
        return self._get_single_value(CMS.imageMaxHeight, int)

    @max_height.setter
    def max_height(self, value: int):
        self._set_single_value(CMS.imageMaxHeight, value)

    @property
    def max_width(self) -> Optional[int]:
        return self._get_single_value(CMS.imageMaxWidth, int)

    @max_width.setter
    def max_width(self, value: int):
        self._set_single_value(CMS.imageMaxWidth, value)

    @property
    def modified(self) -> Optional[datetime]:
        return self._get_single_value(DCTERMS.modified, datetime)

    @modified.setter
    def modified(self, value: datetime):
        self._set_single_value(DCTERMS.modified, value)

    @property
    def width(self) -> Optional[int]:
        return self._get_single_value(EXIF.width, int)

    @width.setter
    def width(self, value: int):
        self._set_single_value(EXIF.width, value)
