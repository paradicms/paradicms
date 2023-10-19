import os

import pytest
from rdflib import ConjunctiveGraph, Graph, URIRef

from paradicms_etl.extractors.rdf_url_extractor import RdfUrlExtractor


@pytest.mark.skipif("CI" in os.environ, reason="don't connect to Wikidata in CI")
def test_extract(tmp_path):
    sut = RdfUrlExtractor(
        cache_dir_path=tmp_path,
        rdf_url=URIRef("http://www.wikidata.org/entity/Q160534.ttl"),
    )
    extract_result = sut(force=False)
    assert len(extract_result) == 1
    conjunctive_graph = extract_result["conjunctive_graph"]
    assert isinstance(conjunctive_graph, ConjunctiveGraph)
    contexts = tuple(conjunctive_graph.contexts())
    assert len(contexts) == 1
    assert len(contexts[0])
