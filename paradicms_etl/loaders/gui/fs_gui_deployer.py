from datetime import datetime
from pathlib import Path

from paradicms_etl.loaders.gui._gui_deployer import _GuiDeployer


class FsGuiDeployer(_GuiDeployer):
    """
    Deployer to the file system.

    Moves the GUI output directory to gui_deploy_dir_path / "current".
    If a previous deployment is at that path, the previous deployment is archived
    in a timestamped subdirectory of gui_deploy_dir_path.
    """

    def __init__(self, *, gui_deploy_dir_path: Path, **kwds):
        _GuiDeployer.__init__(self, **kwds)
        self.__gui_deploy_dir_path = gui_deploy_dir_path

    def deploy(self, *, gui_out_dir_path: Path):
        self.__gui_deploy_dir_path.mkdir(exist_ok=True)
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

        self._logger.info(
            "renaming %s to %s", gui_out_dir_path, current_gui_deploy_dir_path
        )
        gui_out_dir_path.rename(current_gui_deploy_dir_path)
