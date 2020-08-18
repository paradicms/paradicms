from dataclasses import dataclass

from dataclasses_json import LetterCase, dataclass_json


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class Property:
    key: str
    value: str

    def __post_init__(self):
        if not isinstance(self.value, str):
            raise ValueError("value not a string")
