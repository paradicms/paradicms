import os

import pytest
from rdflib import URIRef, Graph, ConjunctiveGraph

from paradicms_etl.extractors.rdf_url_extractor import RdfUrlExtractor


@pytest.mark.skipif("CI" in os.environ, reason="don't connect to Wikidata in CI")
def test_extract(tmp_path):
    sut = RdfUrlExtractor(
        cache_dir_path=tmp_path,
        rdf_url=URIRef("http://www.wikidata.org/entity/Q160534.ttl"),
    )
    extract_result = sut(force=False)
    assert len(extract_result) == 1
    graph = extract_result["graph"]
    assert isinstance(graph, Graph)
    assert not isinstance(graph, ConjunctiveGraph)
    assert len(graph)
