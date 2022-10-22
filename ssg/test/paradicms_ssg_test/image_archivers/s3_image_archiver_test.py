import os
import urllib
from pathlib import Path

from rdflib import URIRef

from paradicms_ssg.file_cache import FileCache
from paradicms_ssg.image_archivers.s3_image_archiver import S3ImageArchiver


def test_archive_image(tmp_path):
    for key in ("AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"):
        if key not in os.environ:
            return

    image_cache = FileCache(cache_dir_path=Path(tmp_path))
    sut = S3ImageArchiver(s3_bucket_name="paradicms-test-images")
    archived_url = sut.archive_image(
        image_file_path=image_cache.get_file(URIRef("https://place-hold.it/1000x1000"))
    )
    # print("Archived URL: " + archived_url)
    with urllib.request.urlopen(
        urllib.request.Request(str(archived_url), method="HEAD")
    ) as open_url:
        assert open_url.getcode() == 200
