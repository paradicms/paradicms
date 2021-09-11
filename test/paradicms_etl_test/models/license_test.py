from rdflib import URIRef

from paradicms_etl.models.license import License


def test_init():
    License.from_fields(
        identifier="testidentifier",
        title="Test title",
        uri=URIRef("http://example.com"),
    )

    # graph = Graph()
    # expected.to_rdf(graph=graph)
    # resource = graph.resource(expected.uri)
    # actual = License.from_rdf(resource=resource)
    #
    # assert actual == expected
