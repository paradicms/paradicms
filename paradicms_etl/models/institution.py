from typing import Optional, Tuple

from rdflib import Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF

from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.property import Property
from paradicms_etl.models.rights import Rights


class Institution(NamedModel):
    def __init__(self, *args, **kwds):
        NamedModel.__init__(self, *args, **kwds)
        self.name

    @classmethod
    def from_fields(
        cls,
        *,
        # See note in Collection re: why there are no links to collections here.
        name: str,
        uri: URIRef,
        abstract: Optional[str] = None,
        properties: Tuple[Property, ...] = (),
        rights: Optional[Rights] = None,
    ) -> "Institution":
        resource = cls._create_resource(identifier=uri)
        if abstract is not None:
            resource.add(DCTERMS.abstract, Literal(abstract))
        resource.add(FOAF.name, Literal(name))
        for property_ in properties:
            resource.add(property_.uri, property_.value)
        if rights is not None:
            rights.to_rdf(add_to_resource=resource)
        return cls(resource)

    @property
    def label(self) -> str:
        return self.name

    @property
    def name(self) -> str:
        return self._required_str_value(FOAF.name)

    @property
    def rights(self) -> Optional[Rights]:
        return Rights.from_rdf(resource=self._resource)
