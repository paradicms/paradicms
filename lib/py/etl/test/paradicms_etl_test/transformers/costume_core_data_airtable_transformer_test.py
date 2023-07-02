from pathlib import Path

from paradicms_etl.extractors.costume_core_data_airtable_extractor import (
    CostumeCoreDataAirtableExtractor,
)
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_defined_term import SchemaDefinedTerm
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_property import SchemaProperty
from paradicms_etl.transformers.costume_core_data_airtable_transformer import (
    CostumeCoreDataAirtableTransformer,
)


def test_transform(data_dir_path: Path):
    extractor = CostumeCoreDataAirtableExtractor(
        access_token="willneverbeused",
        base_id="appgU92SdGTwPIVNg",
        cache_dir_path=data_dir_path / "costume_core_template" / "cache" / "airtable",
    )
    extract_result = extractor(force=False)

    transformer = CostumeCoreDataAirtableTransformer()

    models = tuple(transformer(**extract_result))
    assert models
    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 5
    assert SchemaCollection in model_types
    assert SchemaDefinedTerm in model_types
    assert SchemaImageObject in model_types
    assert SchemaProperty in model_types
    assert SchemaCreativeWork in model_types
