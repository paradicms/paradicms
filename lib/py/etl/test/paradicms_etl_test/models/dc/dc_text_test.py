from rdflib import Graph

from paradicms_etl.models.dc.dc_text import DcText


def test_init():
    DcText.builder(value="Test").build()


def test_creators():
    DcText.builder(value="Test").add_creator("Test creator").build().creators == (
        "Test creator",
    )


def test_to_rdf():
    expected = DcText.builder(value="Test").add_creator("Test creator").build()
    graph = Graph()
    expected.to_rdf(graph=graph)
    actual = DcText.from_rdf(graph.resource(tuple(graph.subjects())[0]))
    assert actual.value == expected.value
    assert actual.creators == expected.creators


def test_value():
    assert DcText.builder(value="Test").build().value == "Test"
