from dataclasses import dataclass
from typing import Optional

from dataclasses_json import LetterCase, dataclass_json
from rdflib import URIRef

from paradicms_etl._model import _Model
from paradicms_etl.models.object_property_key import ObjectPropertyKey


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class ObjectPropertyDefinition(_Model):
    key: ObjectPropertyKey
    label_plural: str
    label_singular: str
    uri: URIRef
    faceted: Optional[bool] = None
