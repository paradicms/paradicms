from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from rdflib import SDO


def test_builder(schema_collection: SchemaCollection) -> None:  # noqa: ARG001
    pass


def test_replacer(schema_collection: SchemaCollection) -> None:
    assert (
        schema_collection.replacer().set_name("Test collection 2").build().label  # type: ignore
        == "Test collection 2"
    )


def test_rdf_type_uri(schema_collection: SchemaCollection) -> None:
    assert schema_collection.rdf_type_uri() == SDO.Collection


def test_work_uris(
    schema_collection: SchemaCollection, schema_creative_work: SchemaCreativeWork
) -> None:
    assert schema_collection.work_uris == (schema_creative_work.uri,)
