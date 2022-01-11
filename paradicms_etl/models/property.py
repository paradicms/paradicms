from dataclasses import dataclass
from typing import Any

from paradicms_etl.model import Model
from rdflib import Literal, URIRef
from rdflib.resource import Resource
from rdflib.term import Node


@dataclass(init=True, unsafe_hash=True)
class Property:
    """
    Container for adding arbitrary (p, o) statements to a model.
    """

    uri: URIRef
    value: [Model, Node]

    def __init__(
        self,
        uri: URIRef,
        value: Any,
    ):
        assert isinstance(uri, URIRef)
        self.uri = uri

        if isinstance(value, (Model, Node)):
            self.value = value
        else:
            self.value = Literal(value)

    def to_rdf(self, *, add_to_resource: Resource) -> None:
        if isinstance(self.value, Model):
            add_to_resource.add(
                self.uri, self.value.to_rdf(graph=add_to_resource.graph)
            )
        elif isinstance(self.value, Node):
            add_to_resource.add(self.uri, self.value)
        else:
            raise NotImplementedError
