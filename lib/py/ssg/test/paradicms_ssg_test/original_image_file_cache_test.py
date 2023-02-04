from pathlib import Path
from urllib.request import urlretrieve

from paradicms_etl.models.image import Image
from rdflib import URIRef

from paradicms_ssg.original_image_file_cache import (
    OriginalImageFileCache,
)


def test_cache_original_image_file_absent(tmp_path):
    tmp_dir_path = Path(tmp_path)
    downloaded_image_file_path = tmp_dir_path / "image.png"
    assert not downloaded_image_file_path.is_file()
    try:
        OriginalImageFileCache(cache_dir_path=tmp_dir_path).cache_original_image(
            Image.from_fields(
                depicts_uri=URIRef("http://example.com"),
                uri=URIRef(downloaded_image_file_path.as_uri()),
            )
        )
        assert False
    except OriginalImageFileCache.CacheOriginalImageException:
        pass


def test_cache_original_image_file_present(tmp_path):
    tmp_dir_path = Path(tmp_path)
    downloaded_image_file_path = tmp_dir_path / "image.png"
    urlretrieve(
        "https://place-hold.it/100x100", filename=str(downloaded_image_file_path)
    )
    assert downloaded_image_file_path.is_file()
    original_image_file_path = OriginalImageFileCache(
        cache_dir_path=tmp_dir_path
    ).cache_original_image(
        Image.from_fields(
            depicts_uri=URIRef("http://example.com"),
            uri=URIRef(downloaded_image_file_path.as_uri()),
        )
    )
    assert original_image_file_path.is_file()
    assert original_image_file_path == downloaded_image_file_path


def test_cache_original_image_http_present(tmp_path):
    original_image_file_path = OriginalImageFileCache(
        cache_dir_path=Path(tmp_path)
    ).cache_original_image(
        Image.from_fields(
            depicts_uri=URIRef("http://example.com"),
            uri=URIRef("https://place-hold.it/100x100"),
        )
    )
    assert original_image_file_path.is_file()


def test_cache_original_image_http_absent(tmp_path):
    try:
        OriginalImageFileCache(cache_dir_path=Path(tmp_path)).cache_original_image(
            Image.from_fields(
                depicts_uri=URIRef("http://example.com"),
                uri=URIRef("https://minorgordon.net/nonextant"),
            )
        )
        assert False
    except OriginalImageFileCache.CacheOriginalImageException:
        pass


def test_cache_original_image_with_url_src(tmp_path):
    original_image_file_path = OriginalImageFileCache(
        cache_dir_path=Path(tmp_path)
    ).cache_original_image(
        Image.from_fields(
            depicts_uri=URIRef("http://example.com"),
            src="https://place-hold.it/100x100",
            uri=URIRef("urn:example:nonextant"),
        )
    )
    assert original_image_file_path.is_file()


def test_cache_original_image_with_relative_src(tmp_path):
    original_image_file_path = OriginalImageFileCache(
        cache_dir_path=Path(tmp_path)
    ).cache_original_image(
        Image.from_fields(
            depicts_uri=URIRef("http://example.com"),
            src="/nonextant",
            uri=URIRef("https://place-hold.it/100x100"),
        )
    )
    assert original_image_file_path.is_file()
