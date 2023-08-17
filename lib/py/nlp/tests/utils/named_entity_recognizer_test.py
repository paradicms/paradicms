from typing import Optional, Tuple

import pytest

from paradicms_nlp.utils.named_entity_recognizer import NamedEntityRecognizer


@pytest.mark.parametrize(
    "llm_model",
    (
        (
            None,
            "spacy.GPT-3-5.v1",
        )
    ),
)
def test_recognizer(llm_model: Optional[str], pdf_texts: Tuple[str, ...]) -> None:
    sut = NamedEntityRecognizer(llm_model=llm_model)
    for pdf_text in pdf_texts:
        named_entities = tuple(sut.recognize(pdf_text))
        assert named_entities
        for named_entity in named_entities:
            assert named_entity.text
            assert named_entity.uri
