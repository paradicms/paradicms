from dataclasses import dataclass
from typing import Any

from rdflib import Literal, URIRef
from rdflib.term import Node


@dataclass(init=True, unsafe_hash=True)
class Property:
    uri: URIRef
    value: Node

    def __init__(
        self,
        uri: URIRef,
        value: Any,
    ):
        self.uri = uri

        if isinstance(value, Node):
            self.value = value
        else:
            self.value = Literal(value)
