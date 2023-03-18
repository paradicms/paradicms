from dataclasses import dataclass
from typing import Optional


@dataclass(frozen=True)
class CostumeCoreRights:
    author: str
    license_uri: Optional[str]
    rights_statement_uri: Optional[str]
    source_name: str
    source_url: str
