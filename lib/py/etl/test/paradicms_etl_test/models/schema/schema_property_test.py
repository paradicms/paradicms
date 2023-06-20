from rdflib import URIRef

from paradicms_etl.models.schema.schema_property import SchemaProperty


def test_builder(schema_property: SchemaProperty):
    pass


def test_range(schema_property: SchemaProperty):
    assert schema_property.range == URIRef("http://example.com/propertyRange")
