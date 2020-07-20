from dataclasses import dataclass, field
from typing import List

from dataclasses_json import dataclass_json
from rdflib import URIRef


@dataclass_json
@dataclass
class DerivedImageSet:
    original: URIRef
    derived: List[URIRef] = field(default_factory=list)
