from dataclasses import dataclass
from typing import Any, Union

from rdflib import Literal, URIRef

from paradicms_etl.models.property_definition import PropertyDefinition


@dataclass(init=True, unsafe_hash=True)
class Property:
    uri: URIRef
    value: Literal

    def __init__(
        self,
        uri: Union[PropertyDefinition, URIRef],
        value: Union[bool, int, str, Literal],
    ):
        if isinstance(uri, PropertyDefinition):
            property_definition = uri
            self.uri = property_definition.uri
        elif isinstance(uri, URIRef):
            self.uri = uri
        else:
            raise TypeError(type(uri))

        if isinstance(value, Literal):
            self.value = value
        else:
            self.value = Literal(value)
