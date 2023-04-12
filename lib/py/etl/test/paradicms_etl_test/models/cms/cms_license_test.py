from rdflib import URIRef

from paradicms_etl.models.cms.cms_license import CmsLicense


def test_init():
    CmsLicense.builder(
        identifier="testidentifier",
        title="Test title",
        uri=URIRef("http://example.com"),
    ).build()

    # graph = Graph()
    # expected.to_rdf(graph=graph)
    # resource = graph.resource(expected.uri)
    # actual = CmsLicense.from_rdf(resource=resource)
    #
    # assert actual == expected
