from dataclasses import dataclass
from typing import Optional

from dataclasses_json import LetterCase, dataclass_json
from rdflib import URIRef

from paradicms_etl.models.object_property_key import ObjectPropertyKey


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class ObjectPropertyDefinition:
    key: ObjectPropertyKey
    label_plural: str
    label_singular: str
    uri: URIRef
    faceted: Optional[bool] = None
