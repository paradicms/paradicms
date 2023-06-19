from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_work import SchemaWork


def test_builder(schema_collection: SchemaCollection):
    pass


def test_replacer(schema_collection: SchemaCollection):
    assert (
        schema_collection.replacer().set_label("Test collection 2").build().label
        == "Test collection 2"
    )


def test_work_uris(schema_collection: SchemaCollection, schema_work: SchemaWork):
    assert schema_collection.work_uris == (schema_work.uri,)
