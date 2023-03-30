from rdflib import URIRef

from paradicms_etl.models.property_group import PropertyGroup


def test_builder():
    PropertyGroup.builder(
        label="Test", uri=URIRef("http://example.com/property")
    ).set_comment("Test comment").build()
