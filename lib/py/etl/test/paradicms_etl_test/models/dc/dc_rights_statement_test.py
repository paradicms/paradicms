from rdflib import URIRef

from paradicms_etl.models.dc.dc_rights_statement import DcRightsStatement


def test_init():
    DcRightsStatement.builder(
        title="Test rights statement",
        uri=URIRef("http://example.com/rightsstatement"),
    ).set_description("Test description").build()
