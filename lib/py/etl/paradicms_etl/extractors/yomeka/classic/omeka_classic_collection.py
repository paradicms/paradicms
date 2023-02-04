from datetime import datetime

from typing import NamedTuple, Optional, Tuple

from .omeka_classic_element_text import OmekaClassicElementText


class OmekaClassicCollection(NamedTuple):
    added: datetime
    element_texts: Tuple[OmekaClassicElementText, ...]
    featured: bool
    id: int
    items_count: int
    modified: datetime
    public: bool
    url: str
    json: Optional[str] = None
