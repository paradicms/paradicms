from datetime import datetime

import pytest
from rdflib import Graph, URIRef

from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)


@pytest.fixture
def test_builder() -> Image:
    return (
        Image.builder(
            depicts_uri=URIRef("http://example.com/work"),
            uri=URIRef("http://example.com/image"),
        )
        .set_created(datetime.now())
        .set_exact_dimensions(ImageDimensions(height=300, width=300))
        .set_format("image/gif")
        .set_modified(datetime.now())
        .set_original_image_uri(URIRef("http://example.com/originalImage"))
        .add_rights(
            Rights.builder()
            .add_creator("Test creator")
            .add_holder("Test holder")
            .add_license(CreativeCommonsLicenses.BY_1_0.uri)
            .add_statement(RightsStatementsDotOrgRightsStatements.InC_EDU.uri)
            .build()
        )
        .set_src("http://example.com/imagesrc")
        .build()
    )


def test_replace_copyable(test_builder):
    assert test_builder.copyable
    actual = test_builder.replace(copyable=False)
    assert not actual.copyable


def test_replace_src(test_builder):
    assert test_builder.src == "http://example.com/imagesrc"
    actual = test_builder.replace(src="http://example.com/newsrc")
    assert actual.src == "http://example.com/newsrc"


def test_to_rdf(test_builder):
    expected = test_builder

    actual = Image.from_rdf(resource=expected.to_rdf(Graph()))

    assert actual.uri == expected.uri
