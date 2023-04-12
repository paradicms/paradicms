from pathlib import Path

from paradicms_etl.extractors.omeka_classic_extractor import OmekaClassicExtractor
from paradicms_etl.models.cms.cms_collection import CmsCollection
from paradicms_etl.models.cms.cms_concept import CmsConcept
from paradicms_etl.models.cms.cms_image import CmsImage
from paradicms_etl.models.cms.cms_property import CmsProperty
from paradicms_etl.models.cms.cms_work import CmsWork
from paradicms_etl.transformers.vccc_transformer import VcccTransformer


def test_transform(data_dir_path: Path):
    extractor = OmekaClassicExtractor(
        api_key="willneverbeused",
        endpoint_url="https://vccc.vassarspaces.net/",
        extracted_data_dir_path=data_dir_path / "vccc" / "extracted",
    )
    extract_result = extractor(force=False)
    transformer = VcccTransformer()
    models = tuple(transformer(**extract_result))
    assert models
    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 5
    assert CmsCollection in model_types
    assert CmsConcept in model_types
    assert CmsImage in model_types
    assert CmsProperty in model_types
    assert CmsWork in model_types
