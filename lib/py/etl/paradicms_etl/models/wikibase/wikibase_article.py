from dataclasses import dataclass
from typing import Optional

from rdflib import URIRef, Literal
from rdflib.resource import Resource


@dataclass(frozen=True)
class WikibaseArticle:
    in_language: str
    name: str
    uri: URIRef

    @classmethod
    def from_rdf(cls, *, resource: Resource) -> Optional["WikibaseArticle"]:
        # SDO namespace uses https://
        in_language = resource.value(URIRef("http://schema.org/inLanguage"))
        assert isinstance(in_language, Literal)

        name = resource.value(URIRef("http://schema.org/name"))
        if name is None:
            return None
        assert isinstance(name, Literal)

        assert isinstance(resource.identifier, URIRef)

        return cls(
            in_language=in_language.toPython(),
            name=name.toPython(),
            uri=resource.identifier,
        )
