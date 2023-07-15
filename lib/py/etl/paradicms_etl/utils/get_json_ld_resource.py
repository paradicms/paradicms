import json

from rdflib import URIRef, Graph
from rdflib.resource import Resource

from paradicms_etl.utils.file_cache import FileCache
from paradicms_etl.utils.resolve_json_ld_contexts import resolve_json_ld_contexts


def get_json_ld_resource(
    *, file_cache: FileCache, json_ld_resource_uri: URIRef
) -> Resource:
    """
    Get JSON-LD from the given URI.

    Assumes the json_ld_resource_uri is both a locator and the main subject of the JSON-LD.
    """

    with open(
        file_cache.get_file(json_ld_resource_uri, file_extension=".jsonld")
    ) as json_ld_file:
        json_ld = json.load(json_ld_file)
        resolved_json_ld = resolve_json_ld_contexts(
            file_cache=file_cache, json_ld=json_ld
        )
        graph = Graph()
        graph.parse(
            data=resolved_json_ld,  # type: ignore
            format="json-ld",
        )
        return graph.resource(json_ld_resource_uri)
