from rdflib import URIRef

from paradicms_etl.models.rights_statement import RightsStatement


def test_init():
    RightsStatement(
        definition="Test definition",
        description="Test description",
        identifier="testidentifier",
        notes=(
            "Test note 1",
        ),  # Deserialization does not preserve order, so only use one
        pref_label="Test pref label",
        scope_note="Test scope note",
        uri=URIRef("http://example.com"),
    )
