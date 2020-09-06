from dataclasses import dataclass
from typing import List, Optional, Tuple, Union

from dataclasses_json import LetterCase, dataclass_json
from rdflib import Literal, URIRef
from rdflib.namespace import DCTERMS
from rdflib.resource import Resource

from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definitions import PropertyDefinitions


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclassis
class Rights:
    holder: Union[URIRef, str, None] = None
    statements: Optional[List[Union[URIRef, str]]] = None

    @classmethod
    def from_properties(cls, properties: Tuple[Property, ...]):
        holders = []
        statements = []
        for property in properties:
            if property.key == PropertyDefinitions.RIGHTS.key:
                statements.append(property.value)
            elif property.key == PropertyDefinitions.RIGHTS_HOLDER.key:
                holders.append(property.value)
        if not holders and not statements:
            return None
        if len(holders) > 1:
            raise NotImplementedError("more than one rights holder")
        return Rights(
            holder=holders[0] if holders else None,
            statements=tuple(statements) if statements else None,
        )

    def to_rdf(self, *, add_to_resource: Resource) -> None:
        if self.holder is not None:
            if isinstance(self.holder, URIRef):
                add_to_resource.add(DCTERMS.rightHolder, self.holder)
            elif isinstance(self.holder, str):
                add_to_resource.add(DCTERMS.rightsHolder, Literal(self.holder))
        if self.statements is not None:
            for statement in self.statements:
                if isinstance(statement, URIRef):
                    add_to_resource.add(DCTERMS.rights, statement)
                elif isinstance(statement, str):
                    add_to_resource.add(DCTERMS.rights, Literal(statement))
