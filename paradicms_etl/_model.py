from dataclasses import dataclass
from typing import Optional

from dataclasses_json import dataclass_json
from rdflib import BNode, Graph, URIRef
from rdflib.resource import Resource


@dataclass_json
@dataclass
class _Model:
    uri: Optional[URIRef]

    def to_rdf(self, *, graph: Graph) -> Resource:
        """
        Convert this model to RDF.
        """
        if self.uri is not None:
            return graph.resource(self.uri)
        else:
            return graph.resource(BNode().skolemize())

    def validate(self):
        """
        Validate this model.
        """
        pass
