import os
from pathlib import Path
from typing import Optional, Tuple

import pytest

from paradicms_nlp.models.llm_metadata import GPT_3_5, LlmMetadata
from paradicms_nlp.utils.named_entity_recognizer import NamedEntityRecognizer


@pytest.mark.parametrize(
    "llm",
    ((None, GPT_3_5)),  # type: ignore
)
def test_recognizer(
    cache_dir_path: Path, llm: Optional[LlmMetadata], pdf_texts: Tuple[str, ...]
) -> None:
    if llm is not None:
        if "OPENAI_API_KEY" not in os.environ or "OPENAI_API_ORG" not in os.environ:
            return

    sut = NamedEntityRecognizer(cache_dir_path=cache_dir_path / "ner", llm=llm)
    for pdf_text in pdf_texts:
        named_entities = tuple(sut.recognize(pdf_text))
        # assert named_entities
        for named_entity in named_entities:
            assert named_entity.text
            assert named_entity.uri
