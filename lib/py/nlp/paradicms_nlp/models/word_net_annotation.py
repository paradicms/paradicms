from dataclasses import dataclass
from typing import Tuple

from paradicms_nlp.models.word_net_synset import WordNetSynset


@dataclass(frozen=True)
class WordNetAnnotation:
    text: str
    synsets: Tuple[WordNetSynset, ...]
