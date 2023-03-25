from pathlib import Path
from urllib.request import urlretrieve

import PIL
from rdflib import URIRef

from paradicms_etl.models.image import Image
from paradicms_etl.models.image_data import ImageData
from paradicms_ssg.original_image_file_cache import (
    OriginalImageFileCache,
)


def test_cache_original_image_data(test_image_file_path: Path, tmp_path: Path):
    image = (
        PIL.Image.open(str(test_image_file_path), formats=("GIF",))
        .convert("RGB")
        .copy()
    )

    original_image_file_path = OriginalImageFileCache(
        cache_dir_path=tmp_path
    ).cache_original_image(
        Image.builder(
            depicts_uri=URIRef("http://example.com"),
            uri=URIRef("http://example.com/image"),
        )
        .set_src(
            ImageData.from_pil_image(image),
        )
        .build()
    )
    assert original_image_file_path.is_file()
    assert str(original_image_file_path).endswith(".jpg")


def test_cache_original_image_file_absent(tmp_path):
    downloaded_image_file_path = tmp_path / "image.png"
    assert not downloaded_image_file_path.is_file()
    try:
        OriginalImageFileCache(cache_dir_path=tmp_path).cache_original_image(
            Image.builder(
                depicts_uri=URIRef("http://example.com"),
                uri=URIRef(downloaded_image_file_path.as_uri()),
            ).build()
        )
        assert False
    except OriginalImageFileCache.CacheOriginalImageException:
        pass


def test_cache_original_image_file_present(tmp_path):
    downloaded_image_file_path = tmp_path / "image.png"
    urlretrieve(
        "https://place-hold.it/100x100", filename=str(downloaded_image_file_path)
    )
    assert downloaded_image_file_path.is_file()
    original_image_file_path = OriginalImageFileCache(
        cache_dir_path=tmp_path
    ).cache_original_image(
        Image.builder(
            depicts_uri=URIRef("http://example.com"),
            uri=URIRef(downloaded_image_file_path.as_uri()),
        ).build()
    )
    assert original_image_file_path.is_file()
    assert original_image_file_path == downloaded_image_file_path


def test_cache_original_image_http_present(tmp_path):
    original_image_file_path = OriginalImageFileCache(
        cache_dir_path=tmp_path
    ).cache_original_image(
        Image.builder(
            depicts_uri=URIRef("http://example.com"),
            uri=URIRef("https://place-hold.it/100x100"),
        ).build()
    )
    assert original_image_file_path.is_file()


def test_cache_original_image_http_absent(tmp_path):
    try:
        OriginalImageFileCache(cache_dir_path=tmp_path).cache_original_image(
            Image.builder(
                depicts_uri=URIRef("http://example.com"),
                uri=URIRef("https://minorgordon.net/nonextant"),
            ).build()
        )
        assert False
    except OriginalImageFileCache.CacheOriginalImageException:
        pass


def test_cache_original_image_with_url_src(tmp_path):
    original_image_file_path = OriginalImageFileCache(
        cache_dir_path=tmp_path
    ).cache_original_image(
        Image.builder(
            depicts_uri=URIRef("http://example.com"),
            uri=URIRef("urn:example:nonextant"),
        )
        .set_src("https://place-hold.it/100x100")
        .build()
    )
    assert original_image_file_path.is_file()


def test_cache_original_image_with_relative_src(tmp_path):
    original_image_file_path = OriginalImageFileCache(
        cache_dir_path=tmp_path
    ).cache_original_image(
        Image.builder(
            depicts_uri=URIRef("http://example.com"),
            uri=URIRef("https://place-hold.it/100x100"),
        )
        .set_src("/nonextant")
        .build()
    )
    assert original_image_file_path.is_file()
