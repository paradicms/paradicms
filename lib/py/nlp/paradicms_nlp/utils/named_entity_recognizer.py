import logging
from typing import Iterable, Optional, Set

import spacy

from paradicms_nlp.models.named_entity import NamedEntity
from paradicms_nlp.models.named_entity_type import NamedEntityType


class NamedEntityRecognizer:
    __IGNORE_ENT_LABELs = {"CARDINAL", "MONEY", "WORK_OF_ART"}

    def __init__(self, llm_model: Optional[str] = None):
        self.__logger = logging.getLogger(__name__)
        if llm_model is not None:
            self.__nlp = spacy.blank("en")
            self.__nlp.add_pipe(
                "llm",
                config={
                    "task": {
                        "@llm_tasks": "spacy.NER.v2",
                        "labels": ["PERSON", "ORGANISATION", "LOCATION"],
                    },
                    "model": {
                        "@llm_models": llm_model,
                    },
                },
            )
        else:
            self.__nlp = spacy.load("en_core_web_md")

    def recognize(self, text: str) -> Iterable[NamedEntity]:
        ignored_ent_labels: Set[str] = set()

        doc = self.__nlp(text)

        for ent in doc.ents:
            if ent.label_ in self.__IGNORE_ENT_LABELs:
                self.__logger.debug(
                    "ignoring named entity label %s: %s",
                    ent.label_,
                    ent.text,
                )
                continue

            if ent.label_ == "GPE":
                yield NamedEntity(text=ent.text, type_=NamedEntityType.LOCATION)
            elif ent.label_ == "ORG":
                yield NamedEntity(text=ent.text, type_=NamedEntityType.ORGANIZATION)
            elif ent.label_ == "PERSON":
                yield NamedEntity(text=ent.text, type_=NamedEntityType.PERSON)
            else:
                if ent.label_ not in ignored_ent_labels:
                    self.__logger.info(
                        "unrecognized named entity label %s: %s",
                        ent.label_,
                        ent.text,
                    )
                    ignored_ent_labels.add(ent.label_.lower())
