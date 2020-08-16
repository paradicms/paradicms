from dataclasses import dataclass
from typing import Optional, Tuple

from dataclasses_json import LetterCase, dataclass_json
from rdflib import Graph, Literal
from rdflib.namespace import FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from .property import Property
from .property_definition import PropertyDefinition
from .rights import Rights
from ..namespace import CMS


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class Institution(_Model):
    # See note in Collection re: why there are no links to collections here.
    name: str
    properties: Tuple[Property, ...] = ()
    rights: Optional[Rights] = None

    def to_rdf(
        self, *, graph: Graph, property_definitions: Tuple[PropertyDefinition, ...]
    ) -> Resource:
        resource = _Model.to_rdf(
            self, graph=graph, property_definitions=property_definitions
        )
        resource.add(RDF.type, CMS[self.__class__.__name__])
        resource.add(FOAF.name, Literal(self.name))
        self._properties_to_rdf(
            property_definitions=property_definitions, resource=resource
        )
        if self.rights is not None:
            self.rights.to_rdf(add_to_resource=resource)
        return resource
