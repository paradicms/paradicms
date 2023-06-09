import os

import pytest
from rdflib import Graph

from paradicms_etl.extractors.wikidata_entity_extractor import WikidataEntityExtractor


@pytest.mark.skipif("CI" in os.environ, reason="don't connect to Wikidata in CI")
def test_extract(tmp_path):
    sut = WikidataEntityExtractor(
        cache_dir_path=tmp_path,
        entity_uris=(
            "http://www.wikidata.org/entity/Q160534",
            "http://www.wikidata.org/entity/Q167518",
        ),
    )  # Jack Kerouac, Neal Cassady
    result = sut(force=False)
    graph = result["graph"]
    assert isinstance(graph, Graph)
    assert len(graph)
