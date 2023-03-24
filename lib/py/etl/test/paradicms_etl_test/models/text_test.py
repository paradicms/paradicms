from rdflib import Graph

from paradicms_etl.models.rights import Rights
from paradicms_etl.models.text import Text


def test_init():
    Text.builder(value="Test").build()


def test_rights():
    Text.builder(value="Test").add_rights(
        Rights.builder().add_creator(creator="Test creator").build()
    ).build().rights.creators == ("Test creator",)


def test_to_rdf():
    expected = (
        Text.builder(value="Test")
        .add_rights(Rights.builder().add_creator("Test creator").build())
        .build()
    )
    graph = Graph()
    expected.to_rdf(graph=graph)
    actual = Text.from_rdf(graph.resource(tuple(graph.subjects())[0]))
    assert actual.value == expected.value
    assert actual.rights.creators == expected.rights.creators


def test_value():
    assert Text.builder(value="Test").build().value == "Test"
