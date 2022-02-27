from rdflib import Graph

from paradicms_etl.models.rights import Rights
from paradicms_etl.models.text import Text


def test_init():
    Text.from_fields(value="Test")


def test_rights():
    Text.from_fields(
        value="Test", rights=Rights.from_fields(creator="Test creator")
    ).rights.creator == "Test creator"


def test_to_rdf():
    expected = Text.from_fields(
        value="Test", rights=Rights.from_fields(creator="Test creator")
    )
    graph = Graph()
    expected.to_rdf(graph=graph)
    actual = Text.from_rdf(graph.resource(tuple(graph.subjects())[0]))
    assert actual.value == expected.value
    assert actual.rights.creator == expected.rights.creator


def test_value():
    assert Text.from_fields(value="Test").value == "Test"
