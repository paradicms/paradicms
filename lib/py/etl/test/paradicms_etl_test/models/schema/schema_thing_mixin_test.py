from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_text_object import SchemaTextObject


def test_description(schema_collection: SchemaCollection):
    description = schema_collection.description
    assert isinstance(description, SchemaTextObject)
    assert description.text == "Test text"


def test_image_uris(
    schema_collection: SchemaCollection, schema_image_object: SchemaImageObject
):
    assert schema_collection.image_uris == (schema_image_object.uri,)


def test_label(schema_collection: SchemaCollection):
    assert schema_collection.label == "Test collection"


def test_name(schema_collection: SchemaCollection):
    assert schema_collection.name == "Test collection"


def test_set_name(schema_collection: SchemaCollection):
    assert (
        schema_collection.replacer().set_name("Test collection 2").build().name
        == "Test collection 2"
    )
