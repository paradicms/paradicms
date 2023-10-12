from collections.abc import Iterable

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

from paradicms_ssg.models.app_configuration import AppConfiguration
from paradicms_ssg.models.cms.cms_app_configuration import CmsAppConfiguration


def ssg_compatibility_validator(models: Iterable[Model]) -> Iterable[Model]:
    """
    Transform all models to canonical representations expected by the static site generator.

    For example, all non-SchemaCreativeWork Work's are transformed to SchemaCreativeWork.
    """

    for model in models:
        if isinstance(model, AppConfiguration):
            if not isinstance(model, CmsAppConfiguration):
                raise TypeError(type(model))
            yield model
        elif isinstance(model, Collection):
            yield SchemaCollection.from_collection(model)
        elif isinstance(model, Concept):
            yield SchemaDefinedTerm.from_concept(model)
        elif isinstance(model, Event):
            if not isinstance(model, SchemaEvent):
                raise TypeError(type(model))
            yield model
        elif isinstance(model, Image):
            yield SchemaImageObject.from_image(model)
        elif isinstance(model, License):
            yield DcLicenseDocument.from_license(model)
        elif isinstance(model, Location):
            yield SchemaPlace.from_location(model)
        elif isinstance(model, Organization):
            yield SchemaOrganization.from_organization(model)
        elif isinstance(model, Person):
            yield SchemaPerson.from_person(model)
        elif isinstance(model, Property):
            yield SchemaProperty.from_property(model)
        elif isinstance(model, PropertyGroup):
            if not isinstance(model, CmsPropertyGroup):
                raise TypeError(type(model))
            yield model
        elif isinstance(model, RightsStatement):
            yield DcRightsStatement.from_rights_statement(model)
        elif isinstance(model, WikibaseProperty):
            continue
        elif isinstance(model, Work):
            yield SchemaCreativeWork.from_work(model)
        else:
            raise TypeError(type(model))
