import os

import pytest
from rdflib import Graph

from paradicms_etl.extractors.wikidata_qid_extractor import WikidataQidExtractor


@pytest.mark.skipif("CI" in os.environ, reason="don't connect to Wikidata in CI")
def test_extract(tmp_path):
    sut = WikidataQidExtractor(
        extracted_data_dir_path=tmp_path, qids=("Q160534", "Q167518")
    )  # Jack Kerouac, Neal Cassady
    result = sut(force=False)
    graph = result["graph"]
    assert isinstance(graph, Graph)
    assert len(graph)
