from rdflib import URIRef

from paradicms_etl.enrichers.rights_statements_dot_org_rights_statements_enricher import (
    rights_statements_dot_org_rights_statements_enricher,
)
from paradicms_etl.models.image import Image
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject


def test_enrich_http(synthetic_data_models):
    test_image = next(
        model for model in synthetic_data_models if isinstance(model, Image)
    )
    enriched_models = tuple(
        rights_statements_dot_org_rights_statements_enricher((test_image,))
    )
    assert len(enriched_models) == 2
    assert any(
        isinstance(model, Image) and model.uri == test_image.uri
        for model in enriched_models
    )
    assert any(
        isinstance(model, RightsStatement)
        and model.uri == URIRef("http://rightsstatements.org/vocab/InC-EDU/1.0/")
        for model in enriched_models
    )


def test_enrich_https():
    test_image = (
        SchemaImageObject.builder(uri=URIRef("http://example.com/image"))
        .add_rights_statement(URIRef("https://rightsstatements.org/vocab/InC-EDU/1.0/"))
        .build()
    )
    enriched_models = tuple(
        rights_statements_dot_org_rights_statements_enricher((test_image,))
    )
    assert len(enriched_models) == 2
    assert any(
        isinstance(model, Image) and model.uri == test_image.uri
        for model in enriched_models
    )
    assert any(
        isinstance(model, RightsStatement)
        and model.uri == URIRef("https://rightsstatements.org/vocab/InC-EDU/1.0/")
        for model in enriched_models
    )
