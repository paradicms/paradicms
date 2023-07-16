import json
from typing import Any
from urllib.parse import urlparse

from rdflib import URIRef

from paradicms_etl.utils.file_cache import FileCache

__RESOLVED_JSON_LD_CONTEXT_CACHE = {}


def __recursively_resolve_json_ld_context(
    *, depth: int, file_cache: FileCache, json_ld_context: Any
) -> Any:
    """
    Recursively resolve a single JSON-LD context.
    :param depth: depth of current recursion
    :param file_cache: file cache to use in resolution
    :param json_ld_context: value of @context
    :return:
    """

    if isinstance(json_ld_context, dict):
        return json_ld_context
    elif isinstance(json_ld_context, list):
        return [
            __recursively_resolve_json_ld_context(
                depth=depth + 1,
                file_cache=file_cache,
                json_ld_context=json_ld_context_item,
            )
            for json_ld_context_item in json_ld_context
        ]
    elif isinstance(json_ld_context, str):
        json_ld_context_str_lower = json_ld_context.lower()
        if not json_ld_context_str_lower.startswith(
            "http://"
        ) and not json_ld_context_str_lower.startswith("https://"):
            return json_ld_context

        parsed_json_ld_context_url = urlparse(json_ld_context_str_lower)
        if parsed_json_ld_context_url.hostname == "schema.org":
            return json_ld_context

        if not parsed_json_ld_context_url.path.endswith(
            ".json"
        ) and not parsed_json_ld_context_url.path.endswith(".jsonld"):
            return json_ld_context

        try:
            return __RESOLVED_JSON_LD_CONTEXT_CACHE[json_ld_context_str_lower]
        except KeyError:
            pass

        with open(
            file_cache.get_file(
                URIRef(json_ld_context_str_lower), file_extension=".jsonld"
            )
        ) as referenced_json_ld_context_file:
            referenced_json_ld_context = json.load(referenced_json_ld_context_file)
        if not isinstance(referenced_json_ld_context, dict):
            raise ValueError(
                f"referenced JSON-LD context {json_ld_context} does not contain a top-level JSON object"
            )
        if "@context" not in referenced_json_ld_context:
            raise ValueError(
                f"referenced JSON-LD context {json_ld_context} does not contain a top-level @context key"
            )
        # Recursively resolve the context
        resolved_json_ld_context = __recursively_resolve_json_ld_contexts(
            depth=depth + 1,
            file_cache=file_cache,
            json_ld=referenced_json_ld_context["@context"],
        )
        # Put the recursively-resolved context in the cache
        __RESOLVED_JSON_LD_CONTEXT_CACHE[
            json_ld_context_str_lower
        ] = resolved_json_ld_context
        return resolved_json_ld_context
    else:
        raise TypeError(json_ld_context)


def __recursively_resolve_json_ld_contexts(
    *, depth: int, file_cache: FileCache, json_ld: Any
) -> Any:
    """
    Recursively resolve all contexts in the given JSON-LD.
    :param depth: depth of current recursion
    :param file_cache: file cache to use in resolution
    :param json_ld: JSON-LD to search for @context's
    :return:
    """

    if isinstance(json_ld, dict):
        resolved_json_ld = {}
        for key, value in json_ld.items():
            if key == "@context":
                resolved_json_ld[key] = __recursively_resolve_json_ld_context(
                    depth=depth + 1, file_cache=file_cache, json_ld_context=value
                )
            else:
                resolved_json_ld[key] = __recursively_resolve_json_ld_contexts(
                    depth=depth + 1, file_cache=file_cache, json_ld=value
                )
        return resolved_json_ld
    elif isinstance(json_ld, list):
        return [
            __recursively_resolve_json_ld_contexts(
                depth=depth + 1, file_cache=file_cache, json_ld=json_ld_item
            )
            for json_ld_item in json_ld
        ]
    elif json_ld is None or isinstance(json_ld, (bool, float, int, str)):
        return json_ld
    else:
        raise TypeError(type(json_ld))


def resolve_json_ld_contexts(*, file_cache: FileCache, json_ld: Any) -> Any:
    """
    Recursively resolve any JSON-LD @context URLs from the file cache.
    :param json_ld: any JSON-LD construct, from the top-level object to an individual value
    :return: JSON-LD with @context URLs replaced with their contents
    """

    return __recursively_resolve_json_ld_contexts(
        file_cache=file_cache, depth=0, json_ld=json_ld
    )
