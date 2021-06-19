from datetime import datetime
from pathlib import Path
from shutil import copytree, rmtree

from paradicms_etl.loaders.gui._gui_deployer import _GuiDeployer


class FsGuiDeployer(_GuiDeployer):
    """
    Deployer to the file system.

    If archive is true:
        Moves the GUI output directory to gui_deploy_dir_path / "current".
        If a previous deployment is at that path, the previous deployment is archived
        in a timestamped subdirectory of gui_deploy_dir_path.
    Else:
        Delete the GUI output directory and recreate it with the new contents.
    """

    def __init__(
        self, *, archive: bool = False, copy: bool = False, gui_deploy_dir_path: Path
    ):
        """
        :param archive: archive old deployments to the same gui_deploy_dir_path rather than overwriting
        :param copy: copy gui_dir_path to gui_deploy_dir_path rather than renaming; used if a rename would cross mounts ("Invalid cross-device link")
        :param gui_deploy_dir_path: directory to "deploy" the GUI to
        """

        _GuiDeployer.__init__(self)
        self.__archive = archive
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
            if self.__gui_deploy_dir_path.is_dir():
                self._logger.info("deleting existing %s", self.__gui_deploy_dir_path)
                rmtree(self.__gui_deploy_dir_path)
            current_gui_deploy_dir_path = self.__gui_deploy_dir_path

        assert not current_gui_deploy_dir_path.exists(), current_gui_deploy_dir_path

        if self.__copy:
            self._logger.info(
                "copying %s to %s", gui_out_dir_path, current_gui_deploy_dir_path
            )
            copytree(gui_out_dir_path, current_gui_deploy_dir_path)
        else:
            self._logger.info(
                "renaming %s to %s", gui_out_dir_path, current_gui_deploy_dir_path
            )
            gui_out_dir_path.rename(current_gui_deploy_dir_path)
