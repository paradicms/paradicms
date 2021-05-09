from dataclasses import dataclass
from typing import Optional, Tuple

from rdflib import DC, DCTERMS, Graph, Literal, SKOS, URIRef
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel


@dataclass(frozen=True)
class License(_NamedModel):
    """
    A license. Adapted from the creativecommons.org license RDF (https://github.com/creativecommons/cc.licenserdf).
    """

    identifier: str
    title: str

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _NamedModel.to_rdf(self, graph=graph)
        resource.add(DCTERMS.identifier, Literal(self.identifier))
        resource.add(DCTERMS.title, Literal(self.title))
        return resource
