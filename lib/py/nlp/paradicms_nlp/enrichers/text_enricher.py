import logging
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Tuple

from bertopic import BERTopic
from paradicms_etl.model import Model
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.text import Text
from rdflib import URIRef

logging.getLogger("pdfminer.cmapdb").setLevel(logging.WARNING)
logging.getLogger("pdfminer.encodingdb").setLevel(logging.WARNING)
logging.getLogger("pdfminer.pdfdocument").setLevel(logging.WARNING)
logging.getLogger("pdfminer.pdfinterp").setLevel(logging.WARNING)
logging.getLogger("pdfminer.pdfpage").setLevel(logging.WARNING)
logging.getLogger("pdfminer.pdfparser").setLevel(logging.WARNING)
logging.getLogger("pdfminer.psparser").setLevel(logging.WARNING)


class TextEnricher:
    def __init__(self):
        self.__logger = logging.getLogger(__name__)
        self.__topic_model: Optional[BERTopic] = None

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        concept_uris_by_label: Dict[str, URIRef] = {}
        text_works: List[Tuple[SchemaCreativeWork, str]] = []
        for model in models:
            if isinstance(model, Concept):
                concept_uris_by_label[model.label] = model.uri
            elif isinstance(model, SchemaCreativeWork) and model.text:
                if isinstance(model.text, Text):
                    text = model.text.value
                else:
                    assert isinstance(model.text, str)
                    text = model.text
                text_works.append((model, text))
                continue
            yield model

        if not text_works:
            return

        texts = [text_work[1] for text_work in text_works]

        while len(texts) <= 64:
            texts = texts * 2

        self._topic_model.fit(texts)
        topic_distribution, _ = self._topic_model.approximate_distribution(texts)

        self._topic_model.visualize_distribution(topic_distribution[1])

        return

    @property
    def _topic_model(self) -> BERTopic:
        if self.__topic_model is None:
            self.__topic_model = BERTopic()
        return self.__topic_model
