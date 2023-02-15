import os
import urllib
from pathlib import Path

from paradicms_ssg.deployers.s3_deployer import S3Deployer


def test_deploy(tmp_path):
    if not (Path.home() / ".aws" / "credentials").is_file() and not (
        "AWS_ACCESS_KEY_ID" in os.environ and "AWS_SECRET_ACCESS_KEY" in os.environ
    ):
        return

    (tmp_path / "subdir").mkdir()
    (tmp_path / "subdir" / "test.txt").touch()

    sut = S3Deployer(
        s3_bucket_name="paradicms-test-deployment",
        cloudfront_distribution_id="E23RHFPD4JI8YV",
    )
    sut(app_out_dir_path=tmp_path)

    with urllib.request.urlopen(
        urllib.request.Request(
            str(sut.s3_bucket_url) + "/subdir/test.txt", method="HEAD"
        )
    ) as open_url:
        assert open_url.getcode() == 200
