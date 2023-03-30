from rdflib import URIRef

from paradicms_etl.models.property import Property


def test_builder():
    Property.builder(
        label="Test", uri=URIRef("http://example.com/property")
    ).set_comment("Test comment").set_order(1).set_range(
        URIRef("http://example.com/whatever")
    ).build()
