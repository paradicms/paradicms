import logging
from typing import Dict, Any, Optional

from rdflib import URIRef, Graph, BNode
from rdflib.resource import Resource

from paradicms_etl.model import Model


class StubModel(Model):
    """
    A model that only exists to be replaced by an enricher.

    It carries the URI the enricher uses to replace it e.g., a Wikidata URI.

    This makes it possible to have a spreadsheet row or .yaml file with only an "@id" in it. It's not valid RDF,
    it's only pointing to another model.
    """

    def __init__(self, uri: URIRef):
        self.__logger = logging.getLogger(__name__)
        self.__uri = uri

    @classmethod
    def from_rdf(cls, resource: Resource):
        raise NotImplementedError(cls.__name__)

    @classmethod
    def json_ld_context(cls) -> Dict[str, Any]:
        raise NotImplementedError(cls.__name__)

    def label(self) -> Optional[str]:
        return None

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        raise NotImplementedError(cls.__name__)

    def to_rdf(self, graph: Graph) -> Resource:
        self.__logger.warning(
            "to_rdf called on a stub model (%s) that should never have passed enrichement",
            self.__class__.__name__,
        )
        return graph.resource(BNode())

    @property
    def uri(self) -> URIRef:
        return self.__uri
