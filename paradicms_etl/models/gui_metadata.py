from dataclasses import dataclass
from typing import Optional

from dataclasses_json import LetterCase, dataclass_json

from paradicms_etl._model import _Model


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class GuiMetadata(_Model):
    document_title: Optional[str] = None
    navbar_title: Optional[str] = None
