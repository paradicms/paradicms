from pathlib import Path

from rdflib import URIRef

from paradicms_etl.extractors.omeka_classic_extractor import OmekaClassicExtractor
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
        institution_name="Test institution",
        institution_uri=URIRef("http://example.com"),
        square_thumbnail_height_px=200,
        square_thumbnail_width_px=200,
        thumbnail_max_height_px=200,
        thumbnail_max_width_px=200,
    )
    models = tuple(transformer(**extract_result))
    assert len(models) > 0
