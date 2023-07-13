import json
from typing import Any, Dict
from urllib.parse import urlparse

from rdflib import URIRef

from paradicms_etl.utils.file_cache import FileCache


def resolve_json_ld_contexts(
    *, file_cache: FileCache, json_ld: Dict[str, Any]
) -> Dict[str, Any]:
    """
    Resolve any JSON-LD @context URLs from the file cache.
    :param json_ld:
    :return: JSON-LD with @context URLs replaced with their contents
    """

    unresolved_context = json_ld.get("@context")
    if not unresolved_context:
        return json_ld
    if isinstance(unresolved_context, list):
        unresolved_contexts = unresolved_context
    else:
        unresolved_contexts = [unresolved_context]
    resolved_contexts = []
    for context in unresolved_contexts:
        if not isinstance(context, str):
            resolved_contexts.append(context)
            continue

        context_lower = context.lower()
        if not context_lower.startswith("http://") and not context_lower.startswith(
            "https://"
        ):
            resolved_contexts.append(context)
            continue

        parsed_context = urlparse(context_lower)
        if parsed_context.hostname == "schema.org":
            resolved_contexts.append(context)
            continue

        if not parsed_context.path.endswith(
            ".json"
        ) and not parsed_context.path.endswith(".jsonld"):
            resolved_contexts.append(context)
            continue

        with open(
            file_cache.get_file(URIRef(context), file_extension=".jsonld")
        ) as context_file:
            resolved_contexts.append(json.load(context_file))

    json_ld_copy = json_ld.copy()
    json_ld_copy["@contexts"] = resolved_contexts
    return json_ld_copy
