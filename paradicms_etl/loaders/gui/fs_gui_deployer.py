from datetime import datetime
from pathlib import Path
from shutil import rmtree
from enum import Enum

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

    class Mode(Enum):
        ARCHIVE = 1
        OVERWRITE = 2

    def __init__(
        self, *, gui_deploy_dir_path: Path, mode: Mode = Mode.OVERWRITE, **kwds
    ):
        _GuiDeployer.__init__(self, **kwds)
        self.__gui_deploy_dir_path = gui_deploy_dir_path
        self.__mode = mode

    def deploy(self, *, gui_out_dir_path: Path):
        if self.__mode == self.Mode.ARCHIVE:
            self.__deploy_archive(gui_out_dir_path)
        else:
            self.__deploy_overwrite(gui_out_dir_path)

    def __deploy_archive(self, gui_out_dir_path: Path):
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
            # rmtree has some issues deleting very long file paths on Windows
            # rename the old directory instead
            current_gui_deploy_dir_path.rename(archive_gui_deploy_dir_path)
        else:
            self.__gui_deploy_dir_path.mkdir(exist_ok=True)

        self._logger.info(
            "renaming %s to %s", gui_out_dir_path, current_gui_deploy_dir_path
        )
        gui_out_dir_path.rename(current_gui_deploy_dir_path)

    def __deploy_overwrite(self, gui_out_dir_path: Path):
        if self.__gui_deploy_dir_path.is_dir():
            self._logger.info("deleting existing %s", self.__gui_deploy_dir_path)
            rmtree(self.__gui_deploy_dir_path)
        self._logger.info(
            "renaming %s to %s", gui_out_dir_path, self.__gui_deploy_dir_path
        )
        gui_out_dir_path.rename(self.__gui_deploy_dir_path)
