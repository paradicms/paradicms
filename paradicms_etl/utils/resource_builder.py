from typing import Optional, Tuple, Any

from rdflib import URIRef, Literal, Graph
from rdflib.resource import Resource
from rdflib.term import Node, Identifier

from paradicms_etl.model import Model
from paradicms_etl.models.property import Property
from paradicms_etl.models.rights import Rights


class ResourceBuilder:
    def __init__(self, identifier: Identifier):
        graph = Graph()
        self.__resource = graph.resource(identifier)

    def add(self, p: URIRef, o: Any) -> "ResourceBuilder":
        if o is None:
            pass
        elif isinstance(o, Model):
            self.__resource.add(p, o.to_rdf(graph=self.__resource.graph))
        elif isinstance(o, Node):
            self.__resource.add(p, o)
        elif isinstance(o, (list, tuple)):
            for sub_o in o:
                self.add(p, sub_o)
        else:
            self.__resource.add(p, Literal(o))
        return self

    def add_properties(self, properties: Tuple[Property, ...]) -> "ResourceBuilder":
        for property_ in properties:
            self.add(property_.uri, property_.value)
        return self

    def add_rights(self, rights: Optional[Rights]) -> "ResourceBuilder":
        if rights is not None:
            temp_graph = Graph()
            rights_resource = rights.to_rdf(graph=temp_graph)
            for p, o in rights_resource.predicate_objects():
                self.__resource.add(p.identifier, o)
        return self

    def build(self) -> Resource:
        return self.__resource
