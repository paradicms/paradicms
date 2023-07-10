from pathlib import Path

from paradicms_etl.extractors.costume_core_data_airtable_extractor import (
    CostumeCoreDataAirtableExtractor,
)
from paradicms_etl.models.dc.dc_image import DcImage
from paradicms_etl.models.dc.dc_physical_object import DcPhysicalObject
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_defined_term import SchemaDefinedTerm
from paradicms_etl.models.schema.schema_property import SchemaProperty
from paradicms_etl.transformers.costume_core_data_airtable_transformer import (
    CostumeCoreDataAirtableTransformer,
)


def test_transform(data_dir_path: Path):
    extractor = CostumeCoreDataAirtableExtractor(
        access_token="willneverbeused",
        base_id="appgU92SdGTwPIVNg",
        cache_dir_path=data_dir_path / "costume_core_template" / "airtable",
    )
    extract_result = extractor(force=False)

    transformer = CostumeCoreDataAirtableTransformer()

    models = tuple(transformer(**extract_result))
    assert models
    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 5
    assert SchemaCollection in model_types
    assert SchemaDefinedTerm in model_types
    assert DcImage in model_types
    assert SchemaProperty in model_types
    assert DcPhysicalObject in model_types
