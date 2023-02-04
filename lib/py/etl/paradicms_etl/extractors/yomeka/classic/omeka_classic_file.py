from datetime import datetime

from typing import NamedTuple, Optional, Tuple

from .omeka_classic_element_text import OmekaClassicElementText
from .omeka_classic_file_urls import OmekaClassicFileUrls


class OmekaClassicFile(NamedTuple):
    added: datetime
    authentication: str
    element_texts: Tuple[OmekaClassicElementText, ...]
    file_urls: OmekaClassicFileUrls
    has_derivative_image: bool
    id: int
    item_id: int
    mime_type: str
    modified: datetime
    original_filename: str
    size: int
    stored: bool
    type_os: str
    url: str
    json: Optional[str] = None
