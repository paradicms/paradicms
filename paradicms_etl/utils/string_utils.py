def is_uri(string: str) -> bool:
    """
    Check if a string is a URI.

    Only supports http:// and https:// currently.
    """

    if not isinstance(string, str):
        return False
    if string.startswith("http://") or string.startswith("https://"):
        return True
    else:
        return False


def sanitize_method_name(string: str) -> str:
    """
    Sanitize a string so that it's safe to use as a method name.
    """

    return (
        string.replace(" ", "_")
        .replace(",", "_")
        .lower()
        .encode("ascii", "ignore")
        .decode("ascii")
    )
