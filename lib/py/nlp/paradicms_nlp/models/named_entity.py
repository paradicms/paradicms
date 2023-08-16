from dataclasses import dataclass
from urllib.parse import quote

from rdflib import URIRef

from paradicms_nlp.models.named_entity_type import NamedEntityType


@dataclass(frozen=True)
class NamedEntity:
    text: str
    type_: NamedEntityType

    @property
    def uri(self) -> URIRef:
        return URIRef(
            f"urn:paradicms:nlp:named-entity:{str(self.type_).lower()}:{quote(self.text.lower())}"
        )
