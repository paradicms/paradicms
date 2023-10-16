import pytest
from paradicms_etl.utils.rewrite_graph_uris import rewrite_graph_uris
from rdflib import BNode, Graph, URIRef


@pytest.fixture(scope="session")
def test_graph() -> Graph:
    graph = Graph()
    graph.add(
        (
            URIRef("http://example.com/subject"),
            URIRef("http://example.com/p"),
            URIRef("http://example.com/o"),
        )
    )
    graph.add(
        (
            BNode(),
            URIRef("http://example.com/p"),
            URIRef("http://example.com/o"),
        )
    )
    graph.add(
        (
            BNode(),
            URIRef("http://example.com/p"),
            BNode(),
        )
    )
    return graph


def test_nop(test_graph: Graph) -> None:
    result = rewrite_graph_uris(graph=test_graph, uri_map={})
    assert result.isomorphic(test_graph)


def test_rewrite(test_graph: Graph) -> None:
    actual = rewrite_graph_uris(
        graph=test_graph,
        uri_map={URIRef("http://example.com/o"): URIRef("http://example.com/o2")},
    )
    assert not actual.isomorphic(test_graph)
    assert len(actual) == len(test_graph)
