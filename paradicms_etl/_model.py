from typing import Optional

from rdflib import BNode, Graph, RDF, URIRef
from rdflib.resource import Resource

from paradicms_etl.namespace import CMS


class _Model:
    def __init__(self, *, uri: Optional[URIRef] = None):
        self.__graph = Graph()
        self.__resource = self.__graph.resource(
            uri if uri is not None else BNode().skolemize()
        )
        self.__resource.add(RDF.type, CMS[self.__class__.__name__])

    @property
    def resource(self) -> Resource:
        return self.__resource
