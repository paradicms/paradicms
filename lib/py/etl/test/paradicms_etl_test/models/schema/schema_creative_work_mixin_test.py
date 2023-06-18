from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.schema.schema_image import SchemaImage
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson


def test_contributors(
    schema_image: SchemaImage, schema_organization: SchemaOrganization
):
    assert schema_image.contributors == (schema_organization.uri,)


def test_creators(schema_image: SchemaImage, schema_person: SchemaPerson):
    assert schema_image.creators == (schema_person.uri,)


def test_license(schema_image: SchemaImage):
    assert schema_image.license == CreativeCommonsLicenses.BY_4_0.uri


def test_rights_holder(schema_image: SchemaImage):
    assert schema_image.rights_holders == ("Test rights holder",)


def test_rights_statement(schema_image: SchemaImage):
    assert (
        schema_image.rights_statement == RightsStatementsDotOrgRightsStatements.InC.uri
    )
