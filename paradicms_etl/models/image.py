  from dataclasses import dataclass
from typing import Optional

from dataclasses_json import LetterCase, dataclass_json
from rdflib import Graph, URIRef
from rdflib.namespace import FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl.models._image import _Image
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class Image(_Image):
    depicts_uri: URIRef  # Collection, institution, or object
    institution_uri: URIRef  # So images can be grouped by institution
    rights: Optional[Rights] = None

    def to_rdf(self, *, graph: Graph, **kwds) -> Resource:
        resource = _Image.to_rdf(self, graph=graph, **kwds)
        resource.add(RDF.type, CMS[self.__class__.__name__])
        if self.original_image_uri is None:
            graph.add((self.depicts_uri, FOAF.depiction, self.uri))
        return resource
