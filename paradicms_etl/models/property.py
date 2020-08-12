from dataclasses import dataclass

from dataclasses_json import LetterCase, dataclass_json

from paradicms_etl.models.property_key import PropertyKey
from paradicms_etl.models.property_value import PropertyValue


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class Property:
    key: PropertyKey
    value: PropertyValue
