from dataclasses import dataclass
from logging import Logger

from rdflib import URIRef, Literal, SDO
from rdflib.resource import Resource


@dataclass(frozen=True)
class WikidataArticle:
    in_language: str
    name: str
    uri: URIRef

    @classmethod
    def from_rdf(cls, *, logger: Logger, resource: Resource) -> "WikidataArticle":
        in_language = resource.value(SDO.inLanguage)
        assert isinstance(in_language, Literal)

        name = resource.value(SDO.name)
        assert isinstance(name, Literal)

        assert isinstance(resource.identifier, URIRef)

        return cls(
            in_language=in_language.toPython(),
            name=name.toPython(),
            uri=resource.identifier,
        )
