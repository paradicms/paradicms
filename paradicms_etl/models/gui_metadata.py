from dataclasses import dataclass
from typing import Optional

from dataclasses_json import LetterCase, dataclass_json
from rdflib import Graph, Literal, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from paradicms_etl.namespace import CMS


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class GuiMetadata(_Model):
    document_title: Optional[str] = None
    navbar_title: Optional[str] = None

    def to_rdf(self, graph: Graph, **kwds) -> Resource:
        resource = graph.resource(CMS.guiMetadataInstance)
        # GUI metadata is a singleton, remove all prior triples
        graph.remove((resource.identifier, None, None))
        resource.add(RDF.type, CMS[self.__class__.__name__])
        if self.document_title is not None:
            resource.add(CMS.guiDocumentTitle, Literal(self.document_title))
        if self.navbar_title is not None:
            resource.add(CMS.guiNavbarTitle, Literal(self.navbar_title))
        return resource
