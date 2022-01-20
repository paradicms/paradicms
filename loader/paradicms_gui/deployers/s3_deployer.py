import os.path
from pathlib import Path
from typing import Optional

import boto3
from rdflib import URIRef
from tqdm import tqdm

from paradicms_gui.deployer import Deployer
from paradicms_gui.utils.get_generic_file_mime_type import get_generic_file_mime_type


class S3Deployer(Deployer):
    def __init__(
        self,
        *,
        s3_bucket_name: str,
        aws_access_key_id: Optional[str] = None,
        aws_secret_access_key: Optional[str] = None,
        **kwds,
    ):
        Deployer.__init__(self, **kwds)

        self.__s3_bucket_name = s3_bucket_name

        client_kwds = {}
        if aws_access_key_id is not None:
            client_kwds["aws_access_key_id"] = aws_access_key_id
        if aws_secret_access_key is not None:
            client_kwds["aws_secret_access_key"] = aws_secret_access_key
        self.__s3_client = boto3.client("s3", **client_kwds)

    @property
    def s3_bucket_name(self) -> str:
        return self.__s3_bucket_name

    @property
    def s3_bucket_url(self) -> str:
        return URIRef(f"https://{self.__s3_bucket_name}.s3.amazonaws.com")

    def deploy(self, *, app_out_dir_path: Path) -> None:
        gui_out_file_paths = []

        for dir_path, sub_dir_names, file_names in os.walk(app_out_dir_path):
            for file_name in file_names:
                if file_name[0] == ".":
                    continue
                gui_out_file_paths.append(Path(dir_path) / file_name)

        self._logger.info(
            "uploading %d files from %s to %s",
            len(gui_out_file_paths),
            app_out_dir_path,
            self.s3_bucket_url,
        )
        for file_path in tqdm(gui_out_file_paths, desc=self.__class__.__name__):
            key = str(file_path.relative_to(app_out_dir_path)).replace(os.path.sep, "/")

            mime_type = get_generic_file_mime_type(file_path)

            self._logger.debug("uploading %s to %s", file_path, key)
            self.__s3_client.upload_file(
                str(file_path),
                self.__s3_bucket_name,
                key,
                ExtraArgs={"ContentType": mime_type},
            )
            self._logger.debug("uploaded %s to %s", file_path, key)
        self._logger.info(
            "uploaded %d files from %s to %s",
            len(gui_out_file_paths),
            app_out_dir_path,
            self.s3_bucket_url,
        )
