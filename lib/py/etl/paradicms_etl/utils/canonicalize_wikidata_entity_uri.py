from urllib.parse import urlparse

from rdflib import URIRef


def canonicalize_wikidata_entity_uri(wikidata_entity_uri: URIRef) -> URIRef:
    parsed_uri = urlparse(str(wikidata_entity_uri))
    if parsed_uri.scheme.lower() not in ("http", "https"):
        raise ValueError(
            "not a Wikidata entity URI, wrong scheme: " + str(wikidata_entity_uri)
        )
    if not parsed_uri.netloc.lower().endswith("wikidata.org"):
        raise ValueError(
            "not a Wikidata entity URI, wrong netloc: " + str(wikidata_entity_uri)
        )
    if not parsed_uri.path.lower().startswith("/entity/"):
        raise ValueError(
            "not a Wikidata entity URI, wrong path prefix: " + str(wikidata_entity_uri)
        )
    return URIRef(
        "http://www.wikidata.org/entity/" + parsed_uri.path[len("/entity/") :]
    )
