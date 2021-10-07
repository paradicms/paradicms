import os
from pathlib import Path

import pytest
from rdflib import Graph

from paradicms_etl.extractors.wikidata_qid_extractor import WikidataQidExtractor


@pytest.mark.skipif("CI" in os.environ, reason="don't connect to Wikidata in CI")
def test_extract(tmpdir):
    sut = WikidataQidExtractor(
        data_dir_path=Path(tmpdir), pipeline_id="test", qids=("Q160534", "Q167518")
    )  # Jack Kerouac, Neal Cassady
    result = sut.extract(force=False)
    graph = result["graph"]
    assert isinstance(graph, Graph)
    assert len(graph)
