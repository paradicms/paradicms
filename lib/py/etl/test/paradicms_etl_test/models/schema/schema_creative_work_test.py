from rdflib import SDO

from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork


def test_builder(schema_creative_work: SchemaCreativeWork):
    pass


def test_replacer(schema_creative_work: SchemaCreativeWork):
    assert (
        schema_creative_work.replacer().set_name("Test work 2").build().name
        == "Test work 2"
    )


def test_rdf_type_uri(schema_creative_work: SchemaCreativeWork):
    assert schema_creative_work.rdf_type_uri() == SDO.CreativeWork
