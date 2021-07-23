import os
import urllib
from pathlib import Path

from rdflib import URIRef

from paradicms_etl.file_cache import FileCache
from paradicms_etl.image_archivers.s3_image_archiver import S3ImageArchiver
from paradicms_gui.loaders.s3_gui_deployer import S3GuiDeployer


def test_deploy(tmp_path):
    for key in ("AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"):
        if key not in os.environ:
            return

    tmp_dir_path = Path(tmp_path)
    (tmp_dir_path / "subdir").mkdir()
    (tmp_dir_path / "subdir" / "test.txt").touch()

    sut = S3GuiDeployer(s3_bucket_name="paradicms-test-deployment")
    sut.deploy(gui_out_dir_path=tmp_dir_path)

    with urllib.request.urlopen(
        urllib.request.Request(
            str(sut.s3_bucket_url) + "/subdir/test.txt", method="HEAD"
        )
    ) as open_url:
        assert open_url.getcode() == 200
