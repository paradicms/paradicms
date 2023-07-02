from datetime import datetime

import pytest
from rdflib import Graph, URIRef

from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.dc.dc_image import DcImage
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)


@pytest.fixture
def test_image() -> DcImage:
    return (
        DcImage.builder(
            uri=URIRef("http://example.com/image"),
        )
        .set_created(datetime.now())
        .set_exact_dimensions(ImageDimensions(height=300, width=300))
        .set_format("image/gif")
        .set_modified(datetime.now())
        .add_creator("Test creator")
        .add_rights_holder("Test holder")
        .add_license(CreativeCommonsLicenses.BY_1_0.uri)
        .add_rights_statement(RightsStatementsDotOrgRightsStatements.InC_EDU.uri)
        .set_src("http://example.com/imagesrc")
        .build()
    )


def test_replace_copyable(test_image):
    assert test_image.copyable
    actual = test_image.replacer().set_copyable(False).build()
    assert not actual.copyable


def test_replace_src(test_image):
    assert test_image.src == "http://example.com/imagesrc"
    actual = test_image.replacer().set_src("http://example.com/newsrc").build()
    assert actual.src == "http://example.com/newsrc"


def test_to_rdf(test_image):
    expected = test_image

    actual = DcImage.from_rdf(resource=expected.to_rdf(Graph()))

    assert actual.uri == expected.uri
