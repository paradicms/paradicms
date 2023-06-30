from rdflib import SDO

from paradicms_etl.models.schema.schema_image_object import SchemaImageObject


def test_caption(schema_image_object: SchemaImageObject):
    assert schema_image_object.caption == "Test image title"


def test_copyable(schema_image_object: SchemaImageObject):
    assert schema_image_object.copyable is False


def test_replacer(schema_image_object: SchemaImageObject):
    assert schema_image_object.src is None
    assert schema_image_object.replacer().set_src("/img.jpg").build().src == "/img.jpg"


def test_rdf_type_uri(schema_image_object: SchemaImageObject):
    assert schema_image_object.rdf_type_uri() == SDO.ImageObject


def test_src(schema_image_object: SchemaImageObject):
    assert schema_image_object.src is None


def test_thumbnail_uris(
    schema_image_object: SchemaImageObject, schema_thumbnail: SchemaImageObject
):
    assert schema_image_object.thumbnail_uris == (schema_thumbnail.uri,)
    assert not schema_thumbnail.thumbnail_uris


# def test_url(schema_image_object: SchemaImageObject):
#     assert schema_image_object.url == URIRef("http://example.com/imagesource")
