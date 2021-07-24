from datetime import datetime
from pathlib import Path
from shutil import copytree, rmtree

from paradicms_gui._deployer import _Deployer


class FsDeployer(_Deployer):
    """
    Deployer to the file system.

    If archive is true:
        Moves the GUI output directory to gui_deploy_dir_path / "current".
        If a previous deployment is at that path, the previous deployment is archived
        in a timestamped subdirectory of gui_deploy_dir_path.
    Else:
        Overwrite the contents of the GUI output directory.
    """

    def __init__(
        self,
        *,
        archive: bool = False,
        clean: bool = False,
        copy: bool = False,
        gui_deploy_dir_path: Path,
    ):
        """
        :param archive: archive old deployments to the same gui_deploy_dir_path rather than overwriting
        :param clean: if archive is False, delete the existing gui_deploy_dir_path before populating it
        :param copy: copy app_dir_path to gui_deploy_dir_path rather than renaming; used if a rename would cross mounts ("Invalid cross-device link")
        :param gui_deploy_dir_path: directory to "deploy" the GUI to
        """

        _Deployer.__init__(self)
        self.__archive = archive
        self.__clean = clean
        self.__copy = copy
        self.__gui_deploy_dir_path = gui_deploy_dir_path

    def deploy(self, *, gui_out_dir_path: Path):
        if self.__archive:
            current_gui_deploy_dir_path = self.__gui_deploy_dir_path / "current"

            if current_gui_deploy_dir_path.is_dir():
                archive_gui_deploy_dir_path = (
                    self.__gui_deploy_dir_path
                    / f"pre-{datetime.now().isoformat().split('.')[0].replace('-', '').replace(':', '')}"
                )
                self._logger.info(
                    "renaming existing deploy directory %s to %s",
                    current_gui_deploy_dir_path,
                    archive_gui_deploy_dir_path,
                )
                # Can assume the current and archive directories are on the same mount, use rename instead of copy for speed
                current_gui_deploy_dir_path.rename(archive_gui_deploy_dir_path)
            else:
                self.__gui_deploy_dir_path.mkdir(exist_ok=True)
        else:
            current_gui_deploy_dir_path = self.__gui_deploy_dir_path

        if (self.__clean or not self.__copy) and current_gui_deploy_dir_path.is_dir():
            self._logger.info(
                "deleting existing %s before populating it", current_gui_deploy_dir_path
            )
            rmtree(current_gui_deploy_dir_path)

        if self.__copy:
            self._logger.info(
                "copying %s to %s", gui_out_dir_path, current_gui_deploy_dir_path
            )
            copytree(gui_out_dir_path, current_gui_deploy_dir_path, dirs_exist_ok=True)
        else:
            self._logger.info(
                "renaming %s to %s", gui_out_dir_path, current_gui_deploy_dir_path
            )
            gui_out_dir_path.rename(current_gui_deploy_dir_path)
