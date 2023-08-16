from enum import Enum, IntEnum, auto


class NamedEntityType(Enum):
    LOCATION = auto()
    ORGANIZATION = auto()
    PERSON = auto()
