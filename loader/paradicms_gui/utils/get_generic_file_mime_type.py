import mimetypes
from pathlib import Path

__CUSTOM_MIME_TYPES = {".ttl": "text/turtle"}


def get_generic_file_mime_type(file_path: Path) -> str:
    """
    Get the MIME type of a file by looking it up in a table.

    Delegates to the mimetypes.guess_type function, but throws an exception if the type couldn't be guessed.

    :param file_path:
    :raises: ValueException if the MIME type couldn't be guessed
    :return: MIME type (e.g., "text/plain")
    """

    guess_mime_type, _ = mimetypes.guess_type(file_path.as_uri(), strict=False)
    if guess_mime_type is not None:
        return guess_mime_type

    mime_type = __CUSTOM_MIME_TYPES.get(str(file_path.suffix).lower())
    if mime_type is not None:
        return mime_type

    raise ValueError(f"unable to guess MIME type for the file {file_path}")
