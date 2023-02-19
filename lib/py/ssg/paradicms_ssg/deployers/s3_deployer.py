import logging
import os.path
from datetime import datetime
from pathlib import Path
from typing import Optional

import boto3
from tqdm import tqdm

from paradicms_ssg.utils.get_generic_file_mime_type import get_generic_file_mime_type


class S3Deployer:
    def __init__(
        self, *, s3_bucket_name: str, cloudfront_distribution_id: Optional[str] = None
    ):
        self.__cloudfront_client = (
            boto3.client("cloudfront")
            if cloudfront_distribution_id is not None
            else None
        )
        self.__cloudfront_distribution_id = cloudfront_distribution_id
        self.__logger = logging.getLogger(__name__)
        self.__s3_bucket_name = s3_bucket_name
        self.__s3_client = boto3.client("s3")  # type: ignore

    def __call__(self, *, app_out_dir_path: Path) -> None:
        gui_out_file_paths = []

        for dir_path, sub_dir_names, file_names in os.walk(app_out_dir_path):
            for file_name in file_names:
                if file_name[0] == ".":
                    continue
                gui_out_file_paths.append(Path(dir_path) / file_name)

        self.__logger.info(
            "uploading %d files from %s to %s",
            len(gui_out_file_paths),
            app_out_dir_path,
            self.s3_bucket_url,
        )
        for file_path in tqdm(gui_out_file_paths, desc=self.__class__.__name__):
            key = str(file_path.relative_to(app_out_dir_path)).replace(os.path.sep, "/")

            mime_type = get_generic_file_mime_type(file_path)

            self.__logger.debug("uploading %s to %s", file_path, key)
            self.__s3_client.upload_file(
                str(file_path),
                self.__s3_bucket_name,
                key,
                ExtraArgs={"ContentType": mime_type},
            )
            self.__logger.debug("uploaded %s to %s", file_path, key)
        self.__logger.info(
            "uploaded %d files from %s to %s",
            len(gui_out_file_paths),
            app_out_dir_path,
            self.s3_bucket_url,
        )

        if self.__cloudfront_distribution_id is not None:
            assert self.__cloudfront_client is not None
            self.__logger.debug(
                "invaliding CloudFront distribution %s",
                self.__cloudfront_distribution_id,
            )
            self.__cloudfront_client.create_invalidation(
                DistributionId=self.__cloudfront_distribution_id,
                InvalidationBatch={
                    "CallerReference": str(
                        int(datetime.timestamp(datetime.now()) * 1000)
                    ),
                    "Paths": {"Quantity": 1, "Items": ["/*"]},
                },
            )
            self.__logger.info(
                "invalidated CloudFront distribution %s",
                self.__cloudfront_distribution_id,
            )

    @property
    def s3_bucket_name(self) -> str:
        return self.__s3_bucket_name

    @property
    def s3_bucket_url(self) -> str:
        return f"https://{self.__s3_bucket_name}.s3.amazonaws.com"
