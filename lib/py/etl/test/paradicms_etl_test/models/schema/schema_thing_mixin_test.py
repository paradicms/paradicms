from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_image import SchemaImage


def test_image_uris(schema_collection: SchemaCollection, schema_image: SchemaImage):
    assert schema_collection.image_uris == (schema_image.uri,)


def test_label(schema_collection: SchemaCollection):
    assert schema_collection.label == "Test collection"


def test_name(schema_collection: SchemaCollection):
    assert schema_collection.name == "Test collection"


def test_set_name(schema_collection: SchemaCollection):
    assert (
        schema_collection.replacer().set_name("Test collection 2").build().name
        == "Test collection 2"
    )
