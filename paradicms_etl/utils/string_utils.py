import re
from urllib.parse import urlparse

__METHOD_NAME_RE = re.compile("[a-z_]+[a-z0-9_]*")


def is_uri(string: str) -> bool:
    """
    Check if a string is a URI.

    Only supports http:// and https:// currently.
    """

    if not isinstance(string, str):
        return False

    result = urlparse(string)
    return all([result.scheme, result.netloc])


def sanitize_method_name(string: str) -> str:
    """
    Sanitize a string so that it's safe to use as a method name.
    """

    method_name = (
        string.replace(" ", "_")
        .replace(",", "_")
        .lower()
        .encode("ascii", "ignore")
        .decode("ascii")
    )
    assert __METHOD_NAME_RE.match(method_name), method_name
    return method_name
