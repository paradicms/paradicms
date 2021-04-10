from dataclasses import dataclass
from typing import Union

from rdflib import URIRef

from paradicms_etl.models.property_definition import PropertyDefinition


@dataclass(init=True, unsafe_hash=True)
class Property:
    property_definition_uri: URIRef
    value: str

    def __init__(
        self, property_definition: Union[PropertyDefinition, URIRef], value: str
    ):
        if isinstance(property_definition, PropertyDefinition):
            self.property_definition_uri = property_definition.uri
        elif isinstance(property_definition, URIRef):
            self.property_definition_uri = property_definition
        else:
            raise TypeError(type(property_definition))

        if not isinstance(value, str):
            raise TypeError("value not a string")
        self.value = value
