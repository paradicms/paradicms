from rdflib import URIRef

from paradicms_etl.enrichers.creative_commons_licenses_enricher import (
    creative_commons_licenses_enricher,
)
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License


def test_enrich(synthetic_data_models):
    test_image = next(
        model for model in synthetic_data_models if isinstance(model, Image)
    )
    enriched_models = tuple(creative_commons_licenses_enricher((test_image,)))
    assert len(enriched_models) == 2
    assert any(
        isinstance(model, Image) and model.uri == test_image.uri
        for model in enriched_models
    )
    assert any(
        isinstance(model, License)
        and model.uri == URIRef("http://creativecommons.org/licenses/nc/1.0/")
        for model in enriched_models
    )
