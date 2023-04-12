from pathlib import Path

from paradicms_etl.extractors.omeka_classic_extractor import OmekaClassicExtractor
from paradicms_etl.models.cms.cms_collection import CmsCollection
from paradicms_etl.models.cms.cms_concept import CmsConcept
from paradicms_etl.models.cms.cms_image import CmsImage
from paradicms_etl.models.cms.cms_property import CmsProperty
from paradicms_etl.models.cms.cms_work import CmsWork
from paradicms_etl.transformers.costume_core_omeka_classic_transformer import (
    CostumeCoreOmekaClassicTransformer,
)


def test_transform(data_dir_path: Path):
    extractor = OmekaClassicExtractor(
        api_key="willneverbeused",
        endpoint_url="https://vccc.vassarspaces.net/",
        extracted_data_dir_path=data_dir_path / "vccc" / "extracted",
    )
    extract_result = extractor(force=False)
    transformer = CostumeCoreOmekaClassicTransformer(
        fullsize_max_height_px=600,
        fullsize_max_width_px=600,
        square_thumbnail_height_px=150,
        square_thumbnail_width_px=150,
        thumbnail_max_height_px=200,
        thumbnail_max_width_px=200,
    )
    models = tuple(transformer(**extract_result))
    assert models
    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 5
    assert CmsCollection in model_types
    assert CmsImage in model_types
    assert CmsConcept in model_types
    assert CmsProperty in model_types
    assert CmsWork in model_types
