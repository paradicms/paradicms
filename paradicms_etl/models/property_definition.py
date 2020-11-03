from dataclasses import dataclass
from typing import Optional

from dataclasses_json import LetterCase, dataclass_json

from paradicms_etl.models._named_model import _NamedModel


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class PropertyDefinition(_NamedModel):
    label: str
    faceted: Optional[bool] = None
    full_text_searchable: Optional[bool] = None
