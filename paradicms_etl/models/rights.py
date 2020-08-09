from dataclasses import dataclass
from typing import List, Optional, Union

from dataclasses_json import LetterCase, dataclass_json
from rdflib import Literal, URIRef
from rdflib.namespace import DCTERMS
from rdflib.resource import Resource


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass
class Rights:
    holder: Union[URIRef, str, None] = None
    statements: Optional[List[Union[URIRef, str]]] = None

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
