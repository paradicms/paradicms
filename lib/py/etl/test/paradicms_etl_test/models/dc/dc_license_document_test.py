from rdflib import URIRef

from paradicms_etl.models.dc.dc_license_document import DcLicenseDocument


def test_init():
    DcLicenseDocument.builder(
        title="Test title",
        uri=URIRef("http://example.com/licencse"),
    ).build()

    # graph = Graph()
    # expected.to_rdf(graph=graph)
    # resource = graph.resource(expected.uri)
    # actual = DcLicenseDocument.from_rdf(resource=resource)
    #
    # assert actual == expected
