from datetime import datetime

from typing import NamedTuple, Optional, Tuple

from .omeka_classic_element_text import OmekaClassicElementText
from .omeka_classic_item_type import OmekaClassicItemType
from .omeka_classic_tag import OmekaClassicTag


class OmekaClassicItem(NamedTuple):
    added: datetime
    element_texts: Tuple[OmekaClassicElementText, ...]
    featured: bool
    files_count: int
    id: int
    modified: datetime
    public: bool
    tags: Tuple[OmekaClassicTag, ...]
    url: str
    item_type: Optional[OmekaClassicItemType] = None
    json: Optional[str] = None
