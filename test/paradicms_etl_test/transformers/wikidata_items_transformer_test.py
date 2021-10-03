import os
from pathlib import Path

import pytest

from paradicms_etl.extractors.wikidata_qid_extractor import WikidataQidExtractor
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
    assert models
