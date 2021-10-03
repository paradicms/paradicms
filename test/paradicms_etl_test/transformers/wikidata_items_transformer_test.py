import os
from pathlib import Path

import pytest

from paradicms_etl.extractors.wikidata_qid_extractor import WikidataQidExtractor
from paradicms_etl.models.person import Person
from paradicms_etl.transformers.wikidata_items_transformer import (
    WikidataItemsTransformer,
)


@pytest.mark.skipif("CI" in os.environ, reason="don't connect to Wikidata in CI")
def test_transform(tmpdir):
    graph = WikidataQidExtractor(
        data_dir_path=Path(tmpdir), pipeline_id="test", qids=("Q160534", "Q167518")
    ).extract(force=False)[
        "graph"
    ]  # Jack Kerouac, Neal Cassady

    sut = WikidataItemsTransformer(pipeline_id="test")
    models = tuple(sut.transform(graph=graph))
    assert len(models) == 2
    people = tuple(
        sorted(
            (person for person in models if isinstance(person, Person)),
            key=lambda person: person.label,
        )
    )
    assert len(people) == 2
    assert people[0].name == "Jack Kerouac"
    assert people[1].name == "Neal Cassady"
