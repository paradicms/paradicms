import urllib

import pytest
from paradicms_etl.utils.file_cache import FileCache
from paradicms_ssg_test.check_aws_credentials import check_aws_credentials
from rdflib import URIRef

from paradicms_ssg.image_archivers.s3_image_archiver import S3ImageArchiver


@pytest.mark.skipif(not check_aws_credentials(), reason="no AWS credentials")
def test_archive_image(tmp_path):
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
