import hashlib
from pathlib import Path
from typing import Optional
from PIL import Image

import boto3
from botocore.exceptions import ClientError
from rdflib import URIRef

from paradicms_etl._image_archiver import _ImageArchiver
from paradicms_etl.image_archivers.image_url_archiver import ImageUrlArchiver


class S3ImageFileArchiver(_ImageArchiver):
    def __init__(
        self,
        *,
        s3_bucket_name: str,
        aws_access_key_id: Optional[str] = None,
        aws_secret_access_key: Optional[str] = None,
        force_upload: bool = False,
        **kwds,
    ):
        _ImageArchiver.__init__(self)

        self.__bucket_name = s3_bucket_name
        self.__force_upload = force_upload

        client_kwds = {}
        if aws_access_key_id is not None:
            client_kwds["aws_access_key_id"] = aws_access_key_id
        if aws_secret_access_key is not None:
            client_kwds["aws_secret_access_key"] = aws_secret_access_key
        self.__s3_client = boto3.client("s3", **client_kwds)

    def archive_image(self, *, image_file_path: Path) -> URIRef:
        image_file_hash = hashlib.sha256()
        with open(image_file_path, "rb") as image_file:
            for byte_block in iter(lambda: image_file.read(4096), b""):
                image_file_hash.update(byte_block)

        with Image.open(str(image_file_path)) as image:
            image_format = image.format
            image_width, image_height = image.size

        key_parts = []
        key_parts.append(image_file_hash.hexdigest())
        key_parts.append(f"{image_width}x{image_height}")
        key = "/".join(key_parts)

        archived_image_url = URIRef(
            f"https://{self.__bucket_name}.s3.amazonaws.com/{key}"
        )

        if not self.__force_upload:
            try:
                self.__s3_client.head_object(Bucket=self.__bucket_name, Key=key)
                return archived_image_url
            except ClientError as client_error:
                if client_error.response["Error"]["Code"] == "404":
                    self._logger.info(
                        "%s does not exist, uploading", archived_image_url
                    )
                else:
                    raise

        self._logger.debug("uploading %s to %s", image_file_path, archived_image_url)
        self.__s3_client.upload_file(
            str(image_file_path),
            self.__bucket_name,
            key,
            ExtraArgs={"ContentType": "image/" + image_format.lower(),},
        )
        self._logger.debug("uploaded %s to %s", image_file_path, archived_image_url)

        return archived_image_url


if __name__ == "__main__":
    # Manual unit test, since we don't want to do this on every CI build, or have credentials there.
    import tempfile
    import urllib

    with tempfile.TemporaryDirectory() as temp_dir:
        sut = ImageUrlArchiver(
            cache_dir_path=Path(temp_dir),
            image_file_archiver=S3ImageFileArchiver(
                s3_bucket_name="dressdiscover-images"
            ),
        )
        archived_url = sut.archive_image(image_url="https://place-hold.it/1000x1000")
        print("Archived URL: " + archived_url)
        with urllib.request.urlopen(
            urllib.request.Request(str(archived_url), method="HEAD")
        ) as open_url:
            assert open_url.getcode() == 200
