from rdflib import URIRef

from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup


def test_builder():
    CmsPropertyGroup.builder(
        label="Test", uri=URIRef("http://example.com/property")
    ).set_comment("Test comment").build()
