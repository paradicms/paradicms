def is_uri(string: str) -> bool:
    if not isinstance(string, str):
        return False
    if string.startswith("http://") or string.startswith("https://"):
        return True
    else:
        return False


def sanitize_method_name(string: str) -> str:
    return string.replace(" ", "_").lower().encode("ascii", "ignore").decode("ascii")
