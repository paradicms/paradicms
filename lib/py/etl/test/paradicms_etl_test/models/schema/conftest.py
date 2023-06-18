import pytest
from rdflib import URIRef

from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_image import SchemaImage


@pytest.fixture
def schema_collection(schema_image) -> SchemaCollection:
    return (
        SchemaCollection.builder(
            name="Test collection", uri=URIRef("http://example.com/collection")
        )
        .add_alternate_name("Test collection alternate name")
        .add_description("Test collection description")
        .add_same_as(URIRef("http://example.com/other"))
        .add_image(schema_image)
        .add_work(URIRef("http://example.com/work"))
        .build()
    )


@pytest.fixture
def schema_image() -> SchemaImage:
    return SchemaImage.builder(uri=URIRef("http://example.com/image")).build()
