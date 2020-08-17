import os
from pathlib import Path
from shutil import copytree, rmtree
from typing import Generator
import subprocess
import sys

from paradicms_etl._loader import _Loader
from paradicms_etl._model import _Model
from paradicms_etl.loaders.json_directory_loader import JsonDirectoryLoader


class GuiLoader(_Loader):
    def __init__(self, *, gui: str = "generic", **kwds):
        """
        :param gui: name of a gui (in gui/ of this repository) or path to a gui
        """

        _Loader.__init__(self, **kwds)
        self.__gui = gui

    def __build_gui(self, data_dir_path: Path, gui_dir_path: Path):
        subprocess_env = os.environ.copy()
        subprocess_env["DATA_DIRECTORY_PATH"] = str(data_dir_path)
        subprocess_env["EDITOR"] = ""
        os.chdir(str(gui_dir_path))
        subprocess_ret = subprocess.call(
            ["npm", "run", "build"], env=subprocess_env, shell=True,
        )
        if subprocess_ret != 0:
            self._logger.warning("build command returned non-zero: %d", subprocess_ret)
            sys.exit(subprocess_ret)

        gui_public_dir_path = gui_dir_path / "public"

        if not gui_public_dir_path.is_dir():
            self._logger.warning(
                "build command returned success but %s does not exist",
                gui_public_dir_path,
            )
            sys.exit(1)

        final_public_dir_path = self._loaded_data_dir_path / "public"
        if final_public_dir_path.is_dir():
            self._logger.info(
                "deleting existing final public directory %s", final_public_dir_path
            )
            rmtree(final_public_dir_path)

        self._logger.info(
            "renaming %s to %s", gui_public_dir_path, final_public_dir_path
        )
        os.rename(gui_public_dir_path, final_public_dir_path)

    def __clean_gui(self, gui_dir_path: Path):
        subprocess_env = os.environ.copy()
        subprocess_env["EDITOR"] = ""
        os.chdir(str(gui_dir_path))
        subprocess_ret = subprocess.call(
            ["npm", "run", "clean"], env=subprocess_env, shell=True,
        )
        if subprocess_ret == 0:
            return
        self._logger.warning("clean command returned non-zero: %d", subprocess_ret)
        sys.exit(subprocess_ret)

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
        data_loader = JsonDirectoryLoader(
            clean=True,
            loaded_data_dir_path=data_dir_path,
            pipeline_id=self._pipeline_id,
        )
        self._logger.info("loading data to %s", data_dir_path)
        data_loader.load(force=force, models=models)
        self._logger.info("loaded data to %s", data_dir_path)
        return data_dir_path
