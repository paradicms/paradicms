from typing import NamedTuple

from .omeka_classic_element import OmekaClassicElement
from .omeka_classic_element_set import OmekaClassicElementSet


class OmekaClassicElementText(NamedTuple):
    element: OmekaClassicElement
    element_set: OmekaClassicElementSet
    html: bool
    text: str
