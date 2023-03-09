from pathlib import Path

from paradicms_etl.extractors.omeka_classic_extractor import OmekaClassicExtractor
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.work import Work
from paradicms_etl.transformers.omeka_classic_transformer import OmekaClassicTransformer


def test_transform(data_dir_path: Path):
    extractor = OmekaClassicExtractor(
        api_key="willneverbeused",
        endpoint_url="https://vcomeka.com/vccc/",
        extracted_data_dir_path=data_dir_path / "test" / "omeka_classic",
    )
    extract_result = extractor(force=False)
    transformer = OmekaClassicTransformer(
        fullsize_max_height_px=200,
        fullsize_max_width_px=200,
        square_thumbnail_height_px=200,
        square_thumbnail_width_px=200,
        thumbnail_max_height_px=200,
        thumbnail_max_width_px=200,
    )
    models = tuple(transformer(**extract_result))
    assert models
    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 5
    assert Collection in model_types
    assert Image in model_types
    assert License in model_types
    assert RightsStatement in model_types
    assert Work in model_types
