from rdflib import URIRef

from paradicms_etl.models.stub.stub_image import StubImage


def test_init():
    StubImage(URIRef("https://commons.wikimedia.org/wiki/File:Alan_Turing_Aged_16.jpg"))
