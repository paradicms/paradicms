from dataclasses import dataclass
from typing import Optional

from dataclasses_json import LetterCase, dataclass_json
from rdflib import URIRef

from paradicms_etl._model import _Model
from paradicms_etl.models.property_key import PropertyKey


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class PropertyDefinition(_Model):
    key: PropertyKey
    label_plural: str
    label_singular: str
    uri: URIRef
    faceted: Optional[bool] = None
