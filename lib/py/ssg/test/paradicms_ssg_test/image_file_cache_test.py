from pathlib import Path
from urllib.request import urlretrieve

import PIL
from rdflib import URIRef

from paradicms_etl.models.cms.cms_image_data import CmsImageData
from paradicms_etl.models.dc.dc_image import DcImage
from paradicms_ssg.image_file_cache import (
    ImageFileCache,
)

PLACEHOLDER_IMAGE_URL = "https://paradicms.org/img/placeholder/1000x1000.png"


def test_cache_image_data(test_image_file_path: Path, tmp_path: Path):
    image = (
        PIL.Image.open(str(test_image_file_path), formats=("GIF",))
        .convert("RGB")
        .copy()
    )

    image_file_path = ImageFileCache(cache_dir_path=tmp_path).cache_image(
        DcImage.builder(
            uri=URIRef("http://example.com/image"),
        )
        .set_src(
            CmsImageData.from_pil_image(image),
        )
        .build()
    )
    assert image_file_path.is_file()
    assert str(image_file_path).endswith(".jpg")


def test_cache_image_file_absent(tmp_path):
    downloaded_image_file_path = tmp_path / "image.png"
    assert not downloaded_image_file_path.is_file()
    try:
        ImageFileCache(cache_dir_path=tmp_path).cache_image(
            DcImage.builder(
                uri=URIRef(downloaded_image_file_path.as_uri()),
            ).build()
        )
        assert False
    except ImageFileCache.ImageFileCacheException:
        pass


def test_cache_image_file_present(tmp_path):
    downloaded_image_file_path = tmp_path / "image.png"
    urlretrieve(
        PLACEHOLDER_IMAGE_URL,
        filename=str(downloaded_image_file_path),
    )
    assert downloaded_image_file_path.is_file()
    image_file_path = ImageFileCache(cache_dir_path=tmp_path).cache_image(
        DcImage.builder(
            uri=URIRef(downloaded_image_file_path.as_uri()),
        ).build()
    )
    assert image_file_path.is_file()
    assert image_file_path == downloaded_image_file_path


def test_cache_image_http_present(tmp_path):
    image_file_path = ImageFileCache(cache_dir_path=tmp_path).cache_image(
        DcImage.builder(
            uri=URIRef(PLACEHOLDER_IMAGE_URL),
        ).build()
    )
    assert image_file_path.is_file()


def test_cache_image_http_absent(tmp_path):
    try:
        ImageFileCache(cache_dir_path=tmp_path).cache_image(
            DcImage.builder(
                uri=URIRef("https://minorgordon.net/nonextant"),
            ).build()
        )
        assert False
    except ImageFileCache.ImageFileCacheException:
        pass


def test_cache_image_with_url_src(tmp_path):
    image_file_path = ImageFileCache(cache_dir_path=tmp_path).cache_image(
        DcImage.builder(
            uri=URIRef("urn:example:nonextant"),
        )
        .set_src(PLACEHOLDER_IMAGE_URL)
        .build()
    )
    assert image_file_path.is_file()


def test_cache_image_with_relative_src(tmp_path):
    image_file_path = ImageFileCache(cache_dir_path=tmp_path).cache_image(
        DcImage.builder(
            uri=URIRef(PLACEHOLDER_IMAGE_URL),
        )
        .set_src("/nonextant")
        .build()
    )
    assert image_file_path.is_file()
