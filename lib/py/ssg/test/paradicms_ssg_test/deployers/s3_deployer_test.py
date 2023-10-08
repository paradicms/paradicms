import urllib

import pytest
from paradicms_ssg.deployers.s3_deployer import S3Deployer

from paradicms_ssg_test.check_aws_credentials import check_aws_credentials


@pytest.mark.skipif(not check_aws_credentials(), reason="no AWS credentials")
def test_deploy(tmp_path):
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
