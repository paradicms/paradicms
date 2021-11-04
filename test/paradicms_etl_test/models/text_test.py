from paradicms_etl.models.rights import Rights
from paradicms_etl.models.text import Text


def test_init():
    Text.from_fields(value="Test")


def test_rights():
    Text.from_fields(
        value="Test", rights=Rights(creator="Test creator")
    ).rights.creator == "Test creator"


def test_value():
    assert Text.from_fields(value="Test").value == "Test"
