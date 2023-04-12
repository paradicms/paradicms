from rdflib import URIRef

from paradicms_etl.models.rights_statement import CmsRightsStatement


def test_init():
    CmsRightsStatement.builder(
        identifier="testidentifier",
        pref_label="Test pref label",
        uri=URIRef("http://example.com"),
    ).set_description("Test description").set_definition("Test definition").add_note(
        "Test note 1",
    ).add_scope_note(
        "Test scope note"
    ).build()
