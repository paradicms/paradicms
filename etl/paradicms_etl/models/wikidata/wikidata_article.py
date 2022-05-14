from dataclasses import dataclass
from logging import Logger

from rdflib import URIRef, Literal
from rdflib.resource import Resource

from paradicms_etl.namespaces import SCHEMA


@dataclass(frozen=True)
class WikidataArticle:
    in_language: str
    name: str
    uri: URIRef

    @classmethod
    def from_rdf(cls, *, logger: Logger, resource: Resource) -> "WikidataArticle":
        in_language = resource.value(SCHEMA.inLanguage)
        assert isinstance(in_language, Literal)

        name = resource.value(SCHEMA.name)
        assert isinstance(name, Literal)

        assert isinstance(resource.identifier, URIRef)

        return cls(
            in_language=in_language.toPython(),
            name=name.toPython(),
            uri=resource.identifier,
        )
