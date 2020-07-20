from dataclasses import dataclass, field
from typing import List

from dataclasses_json import dataclass_json

from paradicms_etl.models.image import Image


@dataclass_json
@dataclass
class DerivedImageSet:
    original: Image
    derived: List[Image] = field(default_factory=list)
