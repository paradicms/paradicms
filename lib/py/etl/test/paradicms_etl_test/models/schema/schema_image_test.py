from rdflib import URIRef

from paradicms_etl.models.schema.schema_image import SchemaImage


def test_caption(schema_image: SchemaImage):
    assert schema_image.caption == "Test image title"


def test_copyable(schema_image: SchemaImage):
    assert schema_image.copyable is False


def test_replacer(schema_image: SchemaImage):
    assert schema_image.src is None
    assert schema_image.replacer().set_src("/img.jpg").build().src == "/img.jpg"


def test_source(schema_image: SchemaImage):
    assert schema_image.source == URIRef("http://example.com/imagesource")


def test_src(schema_image: SchemaImage):
    assert schema_image.src is None


def thumbnail_uris(schema_image: SchemaImage, schema_thumbnail: SchemaImage):
    assert schema_image.thumbnail_uris == (schema_thumbnail.uri,)
    assert not schema_thumbnail.thumbnail_uris
