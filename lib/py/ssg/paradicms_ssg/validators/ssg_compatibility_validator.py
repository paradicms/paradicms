from collections.abc import Iterable

from paradicms_etl.model import Model
from paradicms_etl.models.image import Image
from paradicms_etl.models.property import Property
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_property import SchemaProperty
from paradicms_etl.models.work import Work


def ssg_compatibility_validator(models: Iterable[Model]) -> Iterable[Model]:
    """
    Transform all models to canonical representations expected by the static site generator.

    For example, all non-SchemaCreativeWork Work's are transformed to SchemaCreativeWork.
    """

    for model in models:
        if isinstance(model, Image):
            yield SchemaImageObject.from_image(model)
        elif isinstance(model, Property):
            return SchemaProperty.from_property(model)
        elif isinstance(model, Work):
            yield SchemaCreativeWork.from_work(model)
        else:
            raise TypeError(type(model))
