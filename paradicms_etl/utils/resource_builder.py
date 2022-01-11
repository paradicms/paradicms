from typing import Optional, Tuple, Any

from rdflib import URIRef, Literal, Graph
from rdflib.resource import Resource
from rdflib.term import Node

from paradicms_etl.model import Model
from paradicms_etl.models.property import Property
from paradicms_etl.models.rights import Rights


class ResourceBuilder:
    def __init__(self, identifier: URIRef):
        graph = Graph()
        self.__resource = graph.resource(identifier)

    def add(self, p: URIRef, o: Any) -> "_ResourceBuilder":
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

    def add_properties(self, properties: Tuple[Property, ...]) -> "_ResourceBuilder":
        for property_ in properties:
            self.add(property_.uri, property_.value)
        return self

    def add_rights(self, rights: Optional[Rights]) -> "_ResourceBuilder":
        if rights is not None:
            rights.to_rdf(add_to_resource=self.__resource)
        return self

    def build(self) -> Resource:
        return self.__resource
