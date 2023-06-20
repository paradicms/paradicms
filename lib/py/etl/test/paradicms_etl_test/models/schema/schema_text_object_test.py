from paradicms_etl.models.schema.schema_text_object import SchemaTextObject


def test_builder(schema_text_object: SchemaTextObject):
    pass


def test_text(schema_text_object: SchemaTextObject):
    assert schema_text_object.text == "Test text"
