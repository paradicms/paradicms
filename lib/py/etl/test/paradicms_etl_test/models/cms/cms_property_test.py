from rdflib import URIRef

from paradicms_etl.models.rdf.rdf_property import RdfProperty


def test_builder():
    RdfProperty.builder(
        label="Test", uri=URIRef("http://example.com/property")
    ).set_comment("Test comment").set_order(1).set_range(
        URIRef("http://example.com/whatever")
    ).build()
