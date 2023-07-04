from rdflib import URIRef

from paradicms_etl.models.stub.stub_location import StubLocation


def test_init():
    StubLocation(URIRef("http://example.com"))
