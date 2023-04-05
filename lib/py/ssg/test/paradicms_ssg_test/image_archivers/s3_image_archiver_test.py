import os
import urllib
from pathlib import Path

from rdflib import URIRef

from paradicms_ssg.file_cache import FileCache
from paradicms_ssg.image_archivers.s3_image_archiver import S3ImageArchiver


def test_archive_image(tmp_path):
    if not (Path.home() / ".aws" / "credentials").is_file() and not (
        "AWS_ACCESS_KEY_ID" in os.environ and "AWS_SECRET_ACCESS_KEY" in os.environ
    ):
        return

    image_cache = FileCache(cache_dir_path=tmp_path)
    sut = S3ImageArchiver(s3_bucket_name="paradicms-test-images")
    archived_url = sut(
        image_file_path=image_cache.get_file(
            URIRef("https://paradicms.org/img/placeholder/1000x1000.png")
        )
    )
    # print("Archived URL: " + archived_url)
    with urllib.request.urlopen(
        urllib.request.Request(str(archived_url), method="HEAD")
    ) as open_url:
        assert open_url.getcode() == 200
