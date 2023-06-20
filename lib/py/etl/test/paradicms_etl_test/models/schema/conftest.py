import pytest
from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from rdflib import URIRef

from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson
from paradicms_etl.models.schema.schema_place import SchemaPlace


@pytest.fixture
def schema_collection(
    schema_image_object: SchemaImageObject, schema_creative_work: SchemaCreativeWork
) -> SchemaCollection:
    return (
        SchemaCollection.builder(
            name="Test collection", uri=URIRef("http://example.com/collection")
        )
        .add_alternate_name("Test collection alternate name")
        .add_description("Test collection description")
        .add_same_as(URIRef("http://example.com/other"))
        .add_image(schema_image_object)
        .add_work(schema_creative_work)
        .build()
    )


@pytest.fixture
def schema_creative_work(schema_image_object: SchemaImageObject) -> SchemaCreativeWork:
    return (
        SchemaCreativeWork.builder(
            name="Test work", uri=URIRef("http://example.com/work")
        )
        .add_image(schema_image_object)
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
def schema_image_object(
    schema_organization: SchemaOrganization,
    schema_person: SchemaPerson,
    schema_thumbnail: SchemaImageObject,
) -> SchemaImageObject:
    return (
        SchemaImageObject.builder(uri=URIRef("http://example.com/image"))
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
def schema_thumbnail() -> SchemaImageObject:
    return SchemaImageObject.builder(uri=URIRef("http://example.com/thumbnail")).build()


@pytest.fixture
def schema_place() -> SchemaPlace:
    return (
        SchemaPlace.builder(uri=URIRef("http://example.com/place"))
        .set_latitude(42.728104)
        .set_longitude(-73.687576)
        .set_name("Test place")
        .build()
    )
