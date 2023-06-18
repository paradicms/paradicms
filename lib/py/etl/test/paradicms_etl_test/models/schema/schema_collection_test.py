import pytest
from rdflib import URIRef

from paradicms_etl.models.schema.schema_collection import SchemaCollection


@pytest.fixture
def test_collection() -> SchemaCollection:
    return (
        SchemaCollection.builder(
            name="Test collection", uri=URIRef("http://example.com/collection")
        )
        .add_work(URIRef("http://example.com/work"))
        .build()
    )


def test_builder(test_collection: SchemaCollection):
    pass


def test_replacer(test_collection: SchemaCollection):
    assert (
        test_collection.replacer().set_label("Test collection 2").build().label
        == "Test collection 2"
    )


def test_work_uris(test_collection: SchemaCollection):
    assert test_collection.work_uris == (URIRef("http://example.com/work"),)
