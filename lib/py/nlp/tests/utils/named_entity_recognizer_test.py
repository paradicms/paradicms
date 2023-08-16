from typing import Tuple

from paradicms_nlp.utils.named_entity_recognizer import NamedEntityRecognizer


def test_recognizer(pdf_texts: Tuple[str, ...]) -> None:
    sut = NamedEntityRecognizer()
    for pdf_text in pdf_texts:
        named_entities = tuple(sut.recognize(pdf_text))
        assert named_entities
        for named_entity in named_entities:
            assert named_entity.text
            assert named_entity.uri
