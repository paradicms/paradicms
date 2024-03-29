import logging
import os
from datetime import datetime
from pathlib import Path
from shutil import rmtree, copyfile


def _copytree(src, dst):
    """
    Custom copytree that ignores source permissions.
    """

    os.makedirs(dst, exist_ok=True)
    for srcentry in os.scandir(src):
        srcpath = os.path.join(src, srcentry.name)
        dstpath = os.path.join(dst, srcentry.name)
        if srcentry.is_symlink():
            raise NotImplementedError
        elif srcentry.is_dir():
            _copytree(
                srcpath,
                dstpath,
            )
        else:
            # Copy the file but not the mode
            copyfile(srcpath, dstpath, follow_symlinks=False)
    return dst


class FsDeployer:
    """
    Deployer to the file system.

    If archive is true:
        Moves the GUI output directory to deploy_dir_path / "current".
        If a previous deployment is at that path, the previous deployment is archived
        in a timestamped subdirectory of deploy_dir_path.
    Else:
        Overwrite the contents of the GUI output directory.
    """

    def __init__(
        self,
        *,
        deploy_dir_path: Path,
        archive: bool = False,
        clean: bool = False,
        copy: bool = False,
    ):
        """
        :param archive: archive old deployments to the same deploy_dir_path rather than overwriting
        :param clean: if archive is False, delete the existing deploy_dir_path before populating it
        :param copy: copy app_dir_path to deploy_dir_path rather than renaming; used if a rename would cross mounts ("Invalid cross-device link")
        :param deploy_dir_path: directory to "deploy" the GUI to
        """

        self.__archive = archive
        self.__clean = clean
        self.__copy = copy
        self.__deploy_dir_path = deploy_dir_path
        self.__logger = logging.getLogger(__name__)

    def __call__(self, *, app_out_dir_path: Path):
        if self.__archive:
            current_deploy_dir_path = self.__deploy_dir_path / "current"

            if current_deploy_dir_path.is_dir():
                archive_deploy_dir_path = (
                    self.__deploy_dir_path
                    / f"pre-{datetime.now().isoformat().split('.')[0].replace('-', '').replace(':', '')}"
                )
                self.__logger.info(
                    "renaming existing deploy directory %s to %s",
                    current_deploy_dir_path,
                    archive_deploy_dir_path,
                )
                # Can assume the current and archive directories are on the same mount, use rename instead of copy for speed
                current_deploy_dir_path.rename(archive_deploy_dir_path)
            else:
                self.__deploy_dir_path.mkdir(exist_ok=True)
        else:
            current_deploy_dir_path = self.__deploy_dir_path

        if (self.__clean or not self.__copy) and current_deploy_dir_path.is_dir():
            self.__logger.info(
                "deleting existing %s before populating it", current_deploy_dir_path
            )
            rmtree(current_deploy_dir_path)

        if self.__copy:
            self.__logger.info(
                "copying %s to %s", app_out_dir_path, current_deploy_dir_path
            )
            _copytree(app_out_dir_path, current_deploy_dir_path)
        else:
            self.__logger.info(
                "renaming %s to %s", app_out_dir_path, current_deploy_dir_path
            )
            app_out_dir_path.rename(current_deploy_dir_path)
