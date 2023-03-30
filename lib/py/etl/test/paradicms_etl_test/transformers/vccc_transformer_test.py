from pathlib import Path

from paradicms_etl.extractors.omeka_classic_extractor import OmekaClassicExtractor
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.image import Image
from paradicms_etl.models.property import Property
from paradicms_etl.models.work import Work
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
    assert Collection in model_types
    assert Concept in model_types
    assert Image in model_types
    assert Property in model_types
    assert Work in model_types