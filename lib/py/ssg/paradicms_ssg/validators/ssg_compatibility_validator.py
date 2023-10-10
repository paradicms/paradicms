from collections.abc import Iterable

from paradicms_etl.model import Model
from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.image import Image
from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_group import PropertyGroup
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_defined_term import SchemaDefinedTerm
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson
from paradicms_etl.models.schema.schema_property import SchemaProperty
from paradicms_etl.models.work import Work


def ssg_compatibility_validator(models: Iterable[Model]) -> Iterable[Model]:
    """
    Transform all models to canonical representations expected by the static site generator.

    For example, all non-SchemaCreativeWork Work's are transformed to SchemaCreativeWork.
    """

    for model in models:
        if isinstance(model, Concept):
            yield SchemaDefinedTerm.from_concept(model)
        elif isinstance(model, Image):
            yield SchemaImageObject.from_image(model)
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
        elif isinstance(model, Work):
            yield SchemaCreativeWork.from_work(model)
        else:
            raise TypeError(type(model))
