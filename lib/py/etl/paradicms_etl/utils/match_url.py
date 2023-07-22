from typing import Tuple, Optional
from urllib.parse import urlparse


def match_url(
    url: str,
    *,
    match_netloc: Optional[str] = None,
    match_netloc_suffix: Optional[str] = None,
    match_path_prefix: Optional[str] = None,
    match_schemes: Tuple[str, ...] = ("http", "https")
) -> bool:
    """
    Utility function to check whether a given URL matches the given parts (case-insensitive).
    """

    try:
        parsed_url_lower = urlparse(url.lower())
    except ValueError:
        return False

    if match_netloc is not None:
        if parsed_url_lower.netloc != match_netloc.lower():
            return False
    elif match_netloc_suffix is not None:
        if not parsed_url_lower.netloc.endswith(match_netloc_suffix.lower()):
            return False

    if match_path_prefix is not None:
        if not parsed_url_lower.path.startswith(match_path_prefix.lower()) or len(
            parsed_url_lower.path
        ) == len(match_path_prefix):
            return False

    if match_schemes:
        if parsed_url_lower.scheme not in set(
            scheme.lower() for scheme in match_schemes
        ):
            return False

    return True
