from dataclasses import dataclass
from typing import Any, Union

from rdflib import Literal, URIRef
from rdflib.term import Node

from paradicms_etl.models.property_definition import PropertyDefinition


@dataclass(init=True, unsafe_hash=True)
class Property:
    uri: URIRef
    value: Node

    def __init__(
        self,
        uri: Union[PropertyDefinition, URIRef],
        value: Any,
    ):
        if isinstance(uri, PropertyDefinition):
            property_definition = uri
            self.uri = property_definition.uri
        elif isinstance(uri, URIRef):
            self.uri = uri
        else:
            raise TypeError(type(uri))

        if isinstance(value, Node):
            self.value = value
        else:
            self.value = Literal(value)
