from rdflib import Graph

from paradicms_etl.models.dc.dc_image import DcImage


def test_replace_copyable(dc_image: DcImage):
    assert dc_image.copyable
    actual = dc_image.replacer().set_copyable(False).build()
    assert not actual.copyable


def test_replace_src(dc_image: DcImage):
    assert dc_image.src == "http://example.com/imagesrc"
    actual = dc_image.replacer().set_src("http://example.com/newsrc").build()
    assert actual.src == "http://example.com/newsrc"


def test_to_rdf(dc_image: DcImage):
    expected = dc_image

    actual = DcImage.from_rdf(resource=expected.to_rdf(Graph()))

    assert actual.uri == expected.uri
