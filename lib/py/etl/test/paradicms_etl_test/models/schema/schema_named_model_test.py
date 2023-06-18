from rdflib import SDO

from paradicms_etl.models.schema.schema_collection import SchemaCollection


def test_rdf_type_uri(schema_collection: SchemaCollection):
    assert schema_collection.rdf_type_uri() == SDO.Collection
