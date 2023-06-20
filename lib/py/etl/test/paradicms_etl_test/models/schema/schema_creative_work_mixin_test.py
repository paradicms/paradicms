from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)

from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson


def test_contributors(
    schema_image_object: SchemaImageObject, schema_organization: SchemaOrganization
):
    assert schema_image_object.contributors == (schema_organization.uri,)


def test_creators(schema_image_object: SchemaImageObject, schema_person: SchemaPerson):
    assert schema_image_object.creators == (schema_person.uri,)


def test_license(schema_image_object: SchemaImageObject):
    assert schema_image_object.license == CreativeCommonsLicenses.BY_4_0.uri


def test_rights_holder(schema_image_object: SchemaImageObject):
    assert schema_image_object.rights_holders == ("Test rights holder",)


def test_rights_statement(schema_image_object: SchemaImageObject):
    assert (
        schema_image_object.rights_statement
        == RightsStatementsDotOrgRightsStatements.InC.uri
    )
