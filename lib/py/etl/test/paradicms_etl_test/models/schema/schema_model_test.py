from rdflib import SDO

from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_organization import SchemaOrganization


def test_rdf_type_uri(
    schema_collection: SchemaCollection, schema_organization: SchemaOrganization
):
    assert schema_collection.rdf_type_uri() == SDO.Collection
    assert schema_organization.rdf_type_uri() == SDO.Organization
