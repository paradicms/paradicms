from paradicms_etl.utils.match_url import match_url


def is_wikidata_entity_uri(uri: str) -> bool:
    return match_url(
        url=uri, match_netloc_suffix="wikidata.org", match_path_prefix="/entity/"
    )
