from dataclasses import dataclass
from typing import Optional

from dataclasses_json import LetterCase, dataclass_json
from rdflib import URIRef

from paradicms_etl._model import _Model


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class PropertyDefinition(_Model):
    label: str
    uri: URIRef
    faceted: Optional[bool] = None
    full_text_searchable: Optional[bool] = None
