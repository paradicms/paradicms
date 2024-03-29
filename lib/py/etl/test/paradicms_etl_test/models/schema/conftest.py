import pytest
from rdflib import Literal, URIRef

from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_defined_term import SchemaDefinedTerm
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson
from paradicms_etl.models.schema.schema_place import SchemaPlace
from paradicms_etl.models.schema.schema_property import SchemaProperty
from paradicms_etl.models.schema.schema_text_object import SchemaTextObject


@pytest.fixture
def schema_collection(
    schema_image_object: SchemaImageObject,
    schema_creative_work: SchemaCreativeWork,
    schema_text_object: SchemaTextObject,
) -> SchemaCollection:
    return (
        SchemaCollection.builder(
            name="Test collection", uri=URIRef("http://example.com/collection")
        )
        .add_alternate_name("Test collection alternate name")
        .add_same_as(URIRef("http://example.com/other"))
        .add_image(schema_image_object.uri)
        .add_work(schema_creative_work.uri)
        .set_description(schema_text_object)
        .build()
    )


@pytest.fixture
def schema_creative_work(schema_image_object: SchemaImageObject) -> SchemaCreativeWork:
    return (
        SchemaCreativeWork.builder(
            name="Test work", uri=URIRef("http://example.com/work")
        )
        .add_image(schema_image_object.uri)
        .build()
    )


@pytest.fixture
def schema_defined_term(schema_image_object: SchemaImageObject) -> SchemaDefinedTerm:
    return (
        SchemaDefinedTerm.builder(
            name="Test defined term", uri=URIRef("http://example.com/definedTerm")
        )
        .add_image(schema_image_object.uri)
        .add_alternate_name("Test defined term alternate name")
        .add_type_uri(URIRef("http://example.com/type1"))
        .add_type_uri(URIRef("http://example.com/type2"))
        .set_value(Literal("testvalue"))
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
        .add_creator(schema_person.uri)
        .add_contributor(schema_organization.uri)
        .add_license(CreativeCommonsLicenses.BY_4_0.uri)
        .add_rights_holder("Test rights holder")
        .add_rights_statement(RightsStatementsDotOrgRightsStatements.InC.uri)
        .add_thumbnail(schema_thumbnail.uri)
        .set_copyable(False)
        .set_exact_dimensions(ImageDimensions(height=200, width=200))
        .set_encoding_format("image/jpeg")
        .set_max_dimensions(ImageDimensions(height=800, width=800))
        .set_title("Test image title")
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
def schema_thumbnail() -> SchemaImageObject:
    return SchemaImageObject.builder(uri=URIRef("http://example.com/thumbnail")).build()


@pytest.fixture
def schema_place() -> SchemaPlace:
    return (
        SchemaPlace.builder(uri=URIRef("http://example.com/place"))
        .set_centroid(SchemaPlace.Centroid(latitude=42.728104, longitude=-73.687576))
        .set_name("Test place")
        .build()
    )


@pytest.fixture
def schema_property() -> SchemaProperty:
    return (
        SchemaProperty.builder(
            name="Test property", uri=URIRef("http://example.com/property")
        )
        .set_filterable(True)
        .set_range(URIRef("http://example.com/propertyRange"))
        .set_searchable(True)
    ).build()


@pytest.fixture
def schema_text_object() -> SchemaTextObject:
    return SchemaTextObject.builder(text="Test text").build()
