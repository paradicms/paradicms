from dataclasses import dataclass

from dataclasses_json import LetterCase, dataclass_json

from paradicms_etl.models.object_property_key import ObjectPropertyKey
from paradicms_etl.models.object_property_value import ObjectPropertyValue


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class ObjectProperty:
    key: ObjectPropertyKey
    value: ObjectPropertyValue
