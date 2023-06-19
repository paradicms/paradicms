from rdflib import SDO

from paradicms_etl.models.schema.schema_work import SchemaWork


def test_builder(schema_work: SchemaWork):
    pass


def test_replacer(schema_work: SchemaWork):
    assert schema_work.replacer().set_name("Test work 2").build().name == "Test work 2"


def test_rdf_type_uri(schema_work: SchemaWork):
    assert schema_work.rdf_type_uri() == SDO.CreativeWork
