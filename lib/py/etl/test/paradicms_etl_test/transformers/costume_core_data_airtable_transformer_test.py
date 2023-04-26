from pathlib import Path

from paradicms_etl.extractors.costume_core_data_airtable_extractor import (
    CostumeCoreDataAirtableExtractor,
)
from paradicms_etl.models.cms.cms_collection import CmsCollection
from paradicms_etl.models.cms.cms_concept import CmsConcept
from paradicms_etl.models.cms.cms_image import CmsImage
from paradicms_etl.models.cms.cms_property import CmsProperty
from paradicms_etl.models.cms.cms_work import CmsWork
from paradicms_etl.transformers.costume_core_data_airtable_transformer import (
    CostumeCoreDataAirtableTransformer,
)


def test_transform(data_dir_path: Path):
    extractor = CostumeCoreDataAirtableExtractor(
        access_token="willneverbeused",
        base_id="appgU92SdGTwPIVNg",
        cache_dir_path=data_dir_path / "costume_core_template" / "extracted",
    )
    extract_result = extractor(force=False)

    transformer = CostumeCoreDataAirtableTransformer()

    models = tuple(transformer(**extract_result))
    assert models
    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 5
    assert CmsCollection in model_types
    assert CmsConcept in model_types
    assert CmsImage in model_types
    assert CmsProperty in model_types
    assert CmsWork in model_types
