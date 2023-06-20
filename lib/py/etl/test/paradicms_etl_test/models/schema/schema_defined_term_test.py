from rdflib import URIRef, SDO, Literal

from paradicms_etl.models.schema.schema_defined_term import SchemaDefinedTerm


def test_builder(schema_defined_term: SchemaDefinedTerm):
    pass


def test_name(schema_defined_term: SchemaDefinedTerm):
    assert schema_defined_term.name == "Test defined term"


def test_type_uris(schema_defined_term: SchemaDefinedTerm):
    assert tuple(sorted(schema_defined_term.type_uris)) == (
        URIRef("http://example.com/type1"),
        URIRef("http://example.com/type2"),
        SDO.DefinedTerm,
    )


def test_value(schema_defined_term: SchemaDefinedTerm):
    assert schema_defined_term.value == Literal("testvalue")
