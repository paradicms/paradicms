import os
import urllib
from pathlib import Path

from paradicms_ssg.deployers.s3_deployer import S3Deployer


def test_deploy(tmp_path):
    for key in ("AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"):
        if key not in os.environ:
            return

    tmp_dir_path = Path(tmp_path)
    (tmp_dir_path / "subdir").mkdir()
    (tmp_dir_path / "subdir" / "test.txt").touch()

    sut = S3Deployer(s3_bucket_name="paradicms-test-deployment")
    sut.deploy(app_out_dir_path=tmp_dir_path)

    with urllib.request.urlopen(
        urllib.request.Request(
            str(sut.s3_bucket_url) + "/subdir/test.txt", method="HEAD"
        )
    ) as open_url:
        assert open_url.getcode() == 200
