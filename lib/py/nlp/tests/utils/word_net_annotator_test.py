from typing import Tuple

from paradicms_nlp.utils.word_net_annotator import WordNetAnnotator


def test_annotate(pdf_texts: Tuple[str, ...]) -> None:
    sut = WordNetAnnotator()
    for pdf_text in pdf_texts:
        word_net_annotations = tuple(sut.annotate(pdf_text))
        assert word_net_annotations
        for word_net_annotation in word_net_annotations:
            assert word_net_annotation.text
            assert word_net_annotation.synsets
            for synset in word_net_annotation.synsets:
                assert synset.name
                assert synset.uri
