from rdflib import URIRef

from paradicms_etl.models.rights_statement import RightsStatement


def test_init():
    RightsStatement.builder(
        identifier="testidentifier",
        pref_label="Test pref label",
        uri=URIRef("http://example.com"),
    ).set_description("Test description").set_definition("Test definition").add_note(
        "Test note 1",
    ).add_scope_note(
        "Test scope note"
    ).build()
