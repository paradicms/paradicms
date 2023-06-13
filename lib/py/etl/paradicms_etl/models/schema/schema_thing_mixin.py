from abc import abstractmethod, ABC
from typing import Any

from rdflib import URIRef, SDO


class SchemaThingMixin(ABC):
    class Builder(ABC):
        @abstractmethod
        def add(self, p: URIRef, o: Any):
            raise NotImplementedError

        def add_same_as(self, same_as: URIRef) -> "SchemaThingMixin.Builder":
            self.add(SDO.sameAs, same_as)
            return self

    @classmethod
    def json_ld_context(cls):
        return {
            # Override some Thing properties to enforce types
            "sameAs": {"@id": str(SDO.sameAs), "@type": "@id"},
            "url": {"@id": str(SDO.url), "@type": "@id"},
            "@vocab": str(SDO),
        }
