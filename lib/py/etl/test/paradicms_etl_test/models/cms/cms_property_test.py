from rdflib import URIRef

from paradicms_etl.models.cms.cms_property import CmsProperty


def test_builder():
    CmsProperty.builder(
        label="Test", uri=URIRef("http://example.com/property")
    ).set_comment("Test comment").set_order(1).set_range(
        URIRef("http://example.com/whatever")
    ).build()
