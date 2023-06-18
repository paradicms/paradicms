import pytest
from rdflib import URIRef

from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_image import SchemaImage
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson


@pytest.fixture
def schema_collection(schema_image) -> SchemaCollection:
    return (
        SchemaCollection.builder(
            name="Test collection", uri=URIRef("http://example.com/collection")
        )
        .add_alternate_name("Test collection alternate name")
        .add_description("Test collection description")
        .add_same_as(URIRef("http://example.com/other"))
        .add_image(schema_image)
        .add_work(URIRef("http://example.com/work"))
        .build()
    )


@pytest.fixture
def schema_organization() -> SchemaOrganization:
    return SchemaOrganization.builder(
        name="Test organization", uri="http://example.com/organization"
    ).build()


@pytest.fixture
def schema_person() -> SchemaPerson:
    return (
        SchemaPerson.builder(name="Test person", uri="http://example.com/person")
        .set_family_name("Person")
        .set_given_name("Test")
        .build()
    )


@pytest.fixture
def schema_image(
    schema_organization: SchemaOrganization,
    schema_person: SchemaPerson,
    schema_thumbnail: SchemaImage,
) -> SchemaImage:
    return (
        SchemaImage.builder(uri=URIRef("http://example.com/image"))
        .add_creator(schema_person)
        .add_contributor(schema_organization)
        .add_license(CreativeCommonsLicenses.BY_4_0)
        .add_rights_holder("Test rights holder")
        .add_rights_statement(RightsStatementsDotOrgRightsStatements.InC)
        .add_thumbnail(schema_thumbnail)
        .set_copyable(False)
        .set_source(URIRef("http://example.com/imagesource"))
        .set_title("Test image title")
        .build()
    )


@pytest.fixture
def schema_thumbnail() -> SchemaImage:
    return SchemaImage.builder(uri=URIRef("http://example.com/thumbnail")).build()
