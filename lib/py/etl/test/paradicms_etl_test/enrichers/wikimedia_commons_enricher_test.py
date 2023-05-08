from pathlib import Path

import pytest
from rdflib import URIRef

from paradicms_etl.enrichers.wikimedia_commons_enricher import WikimediaCommonsEnricher
from paradicms_etl.models.cms.cms_image import CmsImage
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image import Image


@pytest.fixture
def test_image() -> Image:
    return (
        CmsImage.builder(
            depicts_uri=URIRef("http://example.com/Work"),
            uri=URIRef("http://example.com/Image"),
        )
        .set_source(
            URIRef(
                "http://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine.jpg"
            )
        )
        .build()
    )


def test_enrich(data_dir_path: Path, test_image: Image):
    assert test_image.license is None
    assert test_image.rights_statement is None
    enriched_models = tuple(
        WikimediaCommonsEnricher(
            cache_dir_path=data_dir_path / "test" / "wikimedia_commons"
        )((test_image,))
    )
    assert len(enriched_models) == 1
    enriched_image = enriched_models[0]
    assert isinstance(enriched_image, Image)
    assert enriched_image.uri == test_image.uri
    assert enriched_image.depicts_uri == test_image.depicts_uri
    assert enriched_image.license == CreativeCommonsLicenses.BY_SA_4_0.uri
    # assert (
    #     enriched_image.rights_statement
    #     == RightsStatementsDotOrgRightsStatements.InC.uri
    # )
