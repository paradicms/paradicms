import mimetypes
from pathlib import Path

import boto3
from typing import Optional, Set

from paradicms_ssg.image_archiver import ImageArchiver
from paradicms_ssg.utils.get_image_file_mime_type import get_image_file_mime_type
from paradicms_ssg.utils.sha256_hash_file import sha256_hash_file


class S3ImageArchiver(ImageArchiver):
    def __init__(
        self,
        *,
        s3_bucket_name: str,
        force_upload: bool = False,
        **kwds,
    ):
        ImageArchiver.__init__(self, **kwds)

        self.__force_upload = force_upload
        self.__s3_bucket_name = s3_bucket_name

        s3 = boto3.resource("s3")  # type: ignore
        self.__s3_bucket = s3.Bucket(self.__s3_bucket_name)
        self.__existing_s3_bucket_keys: Optional[Set[str]] = None

    def archive_image(self, *, image_file_path: Path) -> str:
        image_file_mime_type = get_image_file_mime_type(image_file_path)

        guess_file_ext = mimetypes.guess_extension(image_file_mime_type, strict=False)
        if guess_file_ext is None:
            raise ValueError(
                f"unable to guess file extension for MIME type {image_file_mime_type}"
            )

        key = sha256_hash_file(image_file_path) + guess_file_ext

        archived_image_url = f"https://{self.__s3_bucket_name}.s3.amazonaws.com/{key}"

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
                    "%s exists and force_upload not specified, skipping upload", key
                )
                return archived_image_url
            else:
                self._logger.debug("%s does not exist, uploading", archived_image_url)

        self._logger.debug("uploading %s to %s", image_file_path, archived_image_url)
        self.__s3_bucket.upload_file(
            str(image_file_path),
            key,
            ExtraArgs={
                "ContentType": image_file_mime_type,
            },
        )
        self._logger.debug("uploaded %s to %s", image_file_path, archived_image_url)

        return archived_image_url
