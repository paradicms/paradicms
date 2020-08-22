import os
from pathlib import Path
from shutil import copytree, rmtree
from typing import Generator, Optional
import subprocess
import sys

from paradicms_etl._loader import _Loader
from paradicms_etl._model import _Model
from paradicms_etl.loaders.json_directory_loader import JsonDirectoryLoader


class GuiLoader(_Loader):
    def __init__(self, *, gui: str = "union", **kwds):
        """
        :param gui: name of a gui (in gui/ of this repository) or path to a gui
        """

        _Loader.__init__(self, **kwds)
        self.__gui = gui

    def __build_gui(self, data_dir_path: Path, gui_dir_path: Path):
        self.__run_npm_script(
            "build", data_dir_path=data_dir_path, gui_dir_path=gui_dir_path
        )
        self.__run_npm_script(
            "export", data_dir_path=data_dir_path, gui_dir_path=gui_dir_path
        )

        gui_dist_dir_path = gui_dir_path / "out"

        if not gui_dist_dir_path.is_dir():
            self._logger.warning(
                "build command returned success but %s does not exist",
                gui_dist_dir_path,
            )
            sys.exit(1)

        final_dist_dir_path = self._loaded_data_dir_path / "site"
        if final_dist_dir_path.is_dir():
            self._logger.info(
                "deleting existing final dist directory %s", final_dist_dir_path
            )
            rmtree(final_dist_dir_path)

        self._logger.info("renaming %s to %s", gui_dist_dir_path, final_dist_dir_path)
        os.rename(gui_dist_dir_path, final_dist_dir_path)

    def __clean_gui(self, gui_dir_path: Path):
        self.__run_npm_script("clean", gui_dir_path=gui_dir_path)

    def __get_gui_dir_path(self) -> Path:
        if os.path.isdir(self.__gui):
            gui_dir_path = Path(self.__gui)
        else:
            gui_dir_path = (
                Path(__file__).parent.parent.parent.parent / "gui" / self.__gui
            )
        if not gui_dir_path.is_dir():
            raise ValueError(f"{gui_dir_path} does not exist")
        return gui_dir_path

    def load(self, *, force: bool, models: Generator[_Model, None, None]):
        data_dir_path = self.__load_data(force=force, models=models)

        gui_dir_path = self.__get_gui_dir_path()
        self.__clean_gui(gui_dir_path=gui_dir_path)
        self.__build_gui(data_dir_path=data_dir_path, gui_dir_path=gui_dir_path)

    def __load_data(self, force: bool, models: Generator[_Model, None, None]) -> Path:
        data_dir_path = self._loaded_data_dir_path / "data"

        if not any(os.listdir(data_dir_path)):
            self._logger.info("%s is empty, loading data")
        elif force:
            self._logger.info("force specified, loading data to %s", data_dir_path)
        else:
            self._logger.info(
                "%s is not empty and force not specified, skipping data load",
                data_dir_path,
            )
            return data_dir_path

        data_loader = JsonDirectoryLoader(
            clean=True,
            loaded_data_dir_path=data_dir_path,
            pipeline_id=self._pipeline_id,
        )
        data_loader.load(force=force, models=models)
        self._logger.info("loaded data to %s", data_dir_path)

    def __run_npm_script(
        self, script, *, gui_dir_path: Path, data_dir_path: Optional[Path] = None
    ):
        subprocess_env = os.environ.copy()
        if data_dir_path is not None:
            subprocess_env["DATA_DIRECTORY_PATH"] = str(data_dir_path)
        subprocess_env["EDITOR"] = ""

        args = ["npm", "run", script]
        self._logger.info("running %s", args)
        subprocess_ret = subprocess.call(
            args, cwd=str(gui_dir_path), env=subprocess_env, shell=True,
        )
        self._logger.info("%s returned %d", args, subprocess_ret)

        if subprocess_ret != 0:
            self._logger.warning(
                "npm %s script returned non-zero: %d", script, subprocess_ret
            )
            sys.exit(subprocess_ret)
