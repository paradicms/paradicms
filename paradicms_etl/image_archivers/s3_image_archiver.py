import hashlib
import mimetypes
from pathlib import Path
from typing import Optional
from PIL import Image

import boto3
from botocore.exceptions import ClientError
from rdflib import URIRef

from paradicms_etl._image_archiver import _ImageArchiver


class S3ImageArchiver(_ImageArchiver):
    def __init__(
        self,
        *,
        s3_bucket_name: str,
        aws_access_key_id: Optional[str] = None,
        aws_secret_access_key: Optional[str] = None,
        force_upload: bool = False,
        **kwds,
    ):
        _ImageArchiver.__init__(self, **kwds)

        self.__force_upload = force_upload
        self.__s3_bucket_name = s3_bucket_name

        client_kwds = {}
        if aws_access_key_id is not None:
            client_kwds["aws_access_key_id"] = aws_access_key_id
        if aws_secret_access_key is not None:
            client_kwds["aws_secret_access_key"] = aws_secret_access_key
        s3 = boto3.resource("s3", **client_kwds)
        self.__s3_bucket = s3.Bucket(self.__s3_bucket_name)
        self.__existing_s3_bucket_keys = None

    def archive_image(self, *, image_file_path: Path) -> URIRef:
        image_file_hash = hashlib.sha256()
        with open(image_file_path, "rb") as image_file:
            for byte_block in iter(lambda: image_file.read(4096), b""):
                image_file_hash.update(byte_block)

        with Image.open(str(image_file_path)) as image:
            image_format = image.format

        guess_file_ext = mimetypes.guess_extension(
            "image/" + image_format.lower(), strict=False
        )
        if guess_file_ext is None:
            raise ValueError(
                f"unable to guess file extension for format {image_format}"
            )

        key = image_file_hash.hexdigest() + guess_file_ext

        archived_image_url = URIRef(
            f"https://{self.__s3_bucket_name}.s3.amazonaws.com/{key}"
        )

        if not self.__force_upload:
            # Listing the bucket and caching the keys takes a few requests, vs. HEADing each object
            if self.__existing_s3_bucket_keys is None:
                self._logger.info("listing S3 bucket %s", self.__s3_bucket_name)
                self.__existing_s3_bucket_keys = set()
                for object_summary in self.__s3_bucket.objects.all():
                    assert object_summary.key not in self.__existing_s3_bucket_keys
                    self.__existing_s3_bucket_keys.add(object_summary.key)
                self._logger.info(
                    "listed %d keys in S3 bucket %s",
                    len(self.__existing_s3_bucket_keys),
                    self.__s3_bucket_name,
                )
            if key in self.__existing_s3_bucket_keys:
                self._logger.debug(
                    "%s exists and force_upload not specified, skipping upload"
                )
                return archived_image_url
            else:
                self._logger.debug("%s does not exist, uploading", archived_image_url)

        self._logger.debug("uploading %s to %s", image_file_path, archived_image_url)
        self.__s3_bucket.upload_file(
            str(image_file_path),
            key,
            ExtraArgs={
                "ContentType": "image/" + image_format.lower(),
            },
        )
        self._logger.debug("uploaded %s to %s", image_file_path, archived_image_url)

        return archived_image_url
