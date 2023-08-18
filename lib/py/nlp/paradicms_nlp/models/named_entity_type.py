from enum import Enum


class NamedEntityType(Enum):
    LOCATION = "LOCATION"
    ORGANIZATION = "ORGANIZATION"
    PERSON = "PERSON"

    def __str__(self):
        return self.name
