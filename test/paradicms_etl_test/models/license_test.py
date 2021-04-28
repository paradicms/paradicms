from rdflib import Graph, URIRef

from paradicms_etl.models.license import License


def test_rdf_serialization():
    expected = License(
        identifier="testidentifier",
        title="Test title",
        uri=URIRef("http://example.com"),
    )

    graph = Graph()
    expected.to_rdf(graph=graph)
    resource = graph.resource(expected.uri)
    actual = License.from_rdf(resource=resource)

    assert actual == expected
