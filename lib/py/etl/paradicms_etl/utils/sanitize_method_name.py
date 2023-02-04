import re

__METHOD_NAME_RE = re.compile("[a-z_]+[a-z0-9_]*")


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
