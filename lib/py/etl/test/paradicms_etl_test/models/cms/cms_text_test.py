from rdflib import Graph

from paradicms_etl.models.cms.cms_text import CmsText


def test_init():
    CmsText.builder(value="Test").build()


def test_creators():
    CmsText.builder(value="Test").add_creator("Test creator").build().creators == (
        "Test creator",
    )


def test_to_rdf():
    expected = (
        CmsText.builder(value="Test")
        .add_rights(Rights.builder().add_creator("Test creator").build())
        .build()
    )
    graph = Graph()
    expected.to_rdf(graph=graph)
    actual = CmsText.from_rdf(graph.resource(tuple(graph.subjects())[0]))
    assert actual.value == expected.value
    assert actual.rights.creators == expected.rights.creators


def test_value():
    assert CmsText.builder(value="Test").build().value == "Test"
