from rdflib import SDO

from paradicms_etl.models.schema.schema_organization import SchemaOrganization


def test_rdf_type_uri(schema_organization: SchemaOrganization):
    assert schema_organization.rdf_type_uri() == SDO.Organization
