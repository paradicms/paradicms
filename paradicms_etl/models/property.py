from dataclasses import dataclass
from typing import Union

from rdflib import URIRef

from paradicms_etl.models.property_definition import PropertyDefinition


@dataclass(init=True, unsafe_hash=True)
class Property:
    uri: URIRef
    value: str

    def __init__(self, uri: Union[PropertyDefinition, URIRef], value: str):
        if isinstance(uri, PropertyDefinition):
            property_definition = uri
            self.uri = property_definition.uri
        elif isinstance(uri, URIRef):
            self.uri = uri
        else:
            raise TypeError(type(uri))

        if not isinstance(value, str):
            raise TypeError("value not a string")
        self.value = value
