from urllib.parse import urlparse


def is_uri(string: str) -> bool:
    """
    Check if a string is a URI.

    Only supports http:// and https:// currently.
    """

    if not isinstance(string, str):
        return False

    result = urlparse(string)
    return all([result.scheme, result.netloc])
