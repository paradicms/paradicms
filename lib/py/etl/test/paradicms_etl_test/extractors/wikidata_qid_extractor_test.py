import os
from pathlib import Path

import pytest
from rdflib import Graph

from paradicms_etl.extractors.wikidata_qid_extractor import WikidataQidExtractor


@pytest.mark.skipif("CI" in os.environ, reason="don't connect to Wikidata in CI")
def test_extract(tmpdir):
    sut = WikidataQidExtractor(
        qids=("Q160534", "Q167518")
    )  # Jack Kerouac, Neal Cassady
    result = sut.extract(
        extracted_data_dir_path=Path(tmpdir),
        force=False,
        pipeline_id="test",
    )
    graph = result["graph"]
    assert isinstance(graph, Graph)
    assert len(graph)
