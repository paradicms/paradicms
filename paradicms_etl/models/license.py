from dataclasses import dataclass
from typing import Optional

from rdflib import DCTERMS, Graph, Literal
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel


@dataclass(frozen=True)
class License(_NamedModel):
    """
    A license. Adapted from the creativecommons.org license RDF (https://github.com/creativecommons/cc.licenserdf).
    """

    identifier: str
    title: str
    version: Optional[str] = None

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _NamedModel.to_rdf(self, graph=graph)
        resource.add(DCTERMS.identifier, Literal(self.identifier))
        resource.add(DCTERMS.title, Literal(self.title))
        if self.version is not None:
            resource.add(DCTERMS.hasVersion, Literal(self.version))
        return resource
