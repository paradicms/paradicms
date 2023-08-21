from typing import Iterable

import spacy

from paradicms_nlp.models.word_net_annotation import WordNetAnnotation
from paradicms_nlp.models.word_net_synset import WordNetSynset
from paradicms_nlp.utils.spacy_model_name import SPACY_MODEL_NAME

__import__("spacy_wordnet.wordnet_annotator")


class WordNetAnnotator:
    def __init__(self):
        self.__nlp = spacy.load(SPACY_MODEL_NAME)
        self.__nlp.add_pipe("spacy_wordnet", after="tagger")

    def annotate(self, text: str) -> Iterable[WordNetAnnotation]:
        doc = self.__nlp(text)

        for token in doc:
            if token.pos_ != "NOUN":
                continue

            if not token._.wordnet.synsets():
                continue

            yield WordNetAnnotation(
                synsets=tuple(
                    WordNetSynset(synset) for synset in token._.wordnet.synsets()
                ),
                text=token.text,
            )
