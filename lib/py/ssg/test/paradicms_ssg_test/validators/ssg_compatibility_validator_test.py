from paradicms_etl.model import Model
from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.dc.dc_license_document import DcLicenseDocument
from paradicms_etl.models.dc.dc_rights_statement import DcRightsStatement
from paradicms_etl.models.event import Event
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.location import Location
from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_group import PropertyGroup
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_defined_term import SchemaDefinedTerm
from paradicms_etl.models.schema.schema_event import SchemaEvent
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson
from paradicms_etl.models.schema.schema_place import SchemaPlace
from paradicms_etl.models.schema.schema_property import SchemaProperty
from paradicms_etl.models.wikibase.wikibase_property import WikibaseProperty
from paradicms_etl.models.work import Work

from paradicms_ssg.validators.ssg_compatibility_validator import (
    ssg_compatibility_validator,
)


def test_call(synthetic_data_models: tuple[Model, ...]) -> None:
    original_models = tuple(
        original_model
        for original_model in synthetic_data_models
        if not isinstance(original_model, WikibaseProperty)
    )

    for original_model, transformed_model in zip(
        original_models,
        ssg_compatibility_validator(synthetic_data_models),
        strict=True,
    ):
        if isinstance(original_model, Collection):
            assert isinstance(transformed_model, SchemaCollection)
            assert original_model.work_uris == transformed_model.work_uris
        elif isinstance(original_model, Concept):
            assert isinstance(transformed_model, SchemaDefinedTerm)
            original_model_type_uris = {
                type_uri
                for type_uri in original_model.type_uris
                if type_uri != original_model.rdf_type_uri()
            }
            transformed_model_type_uris = {
                type_uri
                for type_uri in transformed_model.type_uris
                if type_uri != transformed_model.rdf_type_uri()
            }
            assert original_model_type_uris == transformed_model_type_uris
            assert original_model.value == transformed_model.value
        elif isinstance(original_model, Event):
            assert isinstance(transformed_model, SchemaEvent)
            # Only SchemaEvents inherit Event currently, so no need for further tests
        elif isinstance(original_model, Image):
            assert isinstance(transformed_model, SchemaImageObject)
            assert original_model.copyable == transformed_model.copyable
            assert original_model.exact_dimensions == transformed_model.exact_dimensions
            assert original_model.max_dimensions == transformed_model.max_dimensions
            assert original_model.src == transformed_model.src
        elif isinstance(original_model, License):
            assert isinstance(transformed_model, DcLicenseDocument)
        elif isinstance(original_model, Location):
            assert isinstance(transformed_model, SchemaPlace)
            assert original_model.centroid == transformed_model.centroid
        elif isinstance(original_model, Organization):
            assert isinstance(transformed_model, SchemaOrganization)
        elif isinstance(original_model, Person):
            assert isinstance(transformed_model, SchemaPerson)
            assert original_model.family_name == transformed_model.family_name
            assert original_model.given_name == transformed_model.given_name
        elif isinstance(original_model, Property):
            assert isinstance(transformed_model, SchemaProperty)
            assert original_model.filterable == transformed_model.filterable
            assert original_model.order == transformed_model.order
            assert original_model.range == transformed_model.range
            assert original_model.searchable == transformed_model.searchable
        elif isinstance(original_model, PropertyGroup):
            assert isinstance(original_model, CmsPropertyGroup)
            assert isinstance(transformed_model, CmsPropertyGroup)
            assert id(original_model) == id(transformed_model)
        elif isinstance(original_model, RightsStatement):
            assert isinstance(transformed_model, DcRightsStatement)
        elif isinstance(original_model, Work):
            assert isinstance(transformed_model, SchemaCreativeWork)
        else:
            raise TypeError(type(original_model))

        if isinstance(original_model, RightsMixin):
            assert isinstance(transformed_model, RightsMixin)
            assert original_model.creators == transformed_model.creators
            assert original_model.contributors == transformed_model.contributors
            assert original_model.licenses == transformed_model.licenses
            assert (
                original_model.rights_statements == transformed_model.rights_statements
            )

        assert original_model.label == transformed_model.label
        # assert original_model.same_as_uris == transformed_model.same_as_uris
        assert original_model.uri == transformed_model.uri
