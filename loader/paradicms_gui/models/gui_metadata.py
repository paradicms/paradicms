from dataclasses import dataclass
from typing import Optional

from paradicms_etl._model import _Model
from paradicms_etl.namespace import CMS
from rdflib import Graph, Literal, RDF
from rdflib.resource import Resource


@dataclass(frozen=True)
class Configuration(_Model):
    bootstrap_stylesheet_href: Optional[str] = None
    document_title: Optional[str] = None
    navbar_title: Optional[str] = None

    def to_rdf(self, graph: Graph) -> Resource:
        resource = graph.resource(CMS.configurationInstance)
        # GUI metadata is a singleton, remove all prior triples
        graph.remove((resource.identifier, None, None))
        resource.add(RDF.type, CMS[self.__class__.__name__])
        if self.bootstrap_stylesheet_href is not None:
            resource.add(
                CMS.guiBootstrapStylesheetHref, Literal(self.bootstrap_stylesheet_href)
            )
        if self.document_title is not None:
            resource.add(CMS.guiDocumentTitle, Literal(self.document_title))
        if self.navbar_title is not None:
            resource.add(CMS.guiNavbarTitle, Literal(self.navbar_title))
        return resource
