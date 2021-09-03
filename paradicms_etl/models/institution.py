from typing import Optional, Tuple

from rdflib import Literal, URIRef
from rdflib.namespace import FOAF

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.property import Property
from paradicms_etl.models.rights import Rights


class Institution(_NamedModel):
    def __init__(
        self,
        *,
        # See note in Collection re: why there are no links to collections here.
        name: str,
        uri: URIRef,
        abstract: Optional[str] = None,
        properties: Tuple[Property, ...] = (),
        rights: Optional[Rights] = None,
    ):
        _NamedModel.__init__(self, uri=uri)
        if abstract is not None:
            self.resource.add(DCTERMS.abstract, Literal(abstract))
        self.resource.add(FOAF.name, Literal(name))
        for property_ in properties:
            self.resource.add(property_.uri, property_.value)
        if rights is not None:
            rights.to_rdf(add_to_resource=self.resource)
