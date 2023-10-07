from paradicms_etl.model import Model
from paradicms_etl.models.image import Image
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.work import Work
from paradicms_etl.transformers.ssg_transformer import ssg_transformer


def test_transform(synthetic_data_models: tuple[Model, ...]) -> None:
    for original_model, transformed_model in zip(
        synthetic_data_models, ssg_transformer(synthetic_data_models), strict=True
    ):
        if isinstance(original_model, Image):
            assert isinstance(transformed_model, SchemaImageObject)
            assert original_model.copyable == transformed_model.copyable
            assert original_model.src == transformed_model.src
        elif isinstance(original_model, Work):
            assert isinstance(transformed_model, SchemaCreativeWork)
        else:
            raise TypeError(type(original_model))

        if isinstance(original_model, RightsMixin):
            assert original_model.creators == transformed_model.creators
            assert original_model.contributors == transformed_model.contributors
            assert original_model.licenses == transformed_model.licenses
            assert (
                original_model.rights_statements == transformed_model.rights_statements
            )

        assert original_model.label == transformed_model.label
        assert original_model.same_as_uris == transformed_model.same_as_uris
        assert original_model.uri == transformed_model.uri
