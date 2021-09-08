from datetime import datetime

from rdflib import Graph, URIRef

from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)


def test_to_rdf():
    expected = Image.from_fields(
        created=datetime.now(),
        depicts_uri=URIRef("http://example.com/work"),
        exact_dimensions=ImageDimensions(height=300, width=300),
        format="image/gif",
        modified=datetime.now(),
        original_image_uri=URIRef("http://example.com/originalImage"),
        # max_dimensions=ImageDimensions(height=600, width=600),
        rights=Rights(
            creator="Test creator",
            holder="Test holder",
            license=CreativeCommonsLicenses.BY_1_0.uri,
            statement=RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
        ),
        src="http://example.com/imagesrc",
        uri=URIRef("http://example.com/image"),
    )

    actual = Image.from_rdf(resource=expected.to_rdf(Graph()))

    assert actual.uri == expected.uri
