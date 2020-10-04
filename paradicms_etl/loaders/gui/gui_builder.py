import logging
import os
import subprocess
import sys
from datetime import datetime
from pathlib import Path
from typing import Union


class GuiBuilder:
    def __init__(self, *, data_dir_path: Path, gui: Union[str, Path]):
        """
        :param data_dir_path: path to the GUI's data directory, which will be passed to the build process as DATA_DIRECTORY_PATH
        :param gui: name of a gui (in gui/ of this repository) or path to a gui
        """

        self.__logger = logging.getLogger(self.__class__.__name__)

        self.__data_dir_path = data_dir_path

        if isinstance(gui, Path):
            gui_dir_path = gui
        elif os.path.isdir(gui):
            gui_dir_path = Path(self.__gui)
        else:
            gui_dir_path = Path(__file__).parent.parent.parent.parent / "gui" / gui
        if not gui_dir_path.is_dir():
            raise ValueError(f"{gui_dir_path} does not exist")

        self.__gui_dir_path = gui_dir_path

    def build(self) -> Path:
        """
        Build the GUI
        :return: directory path the built site
        """

        self.__logger.info("building GUI")
        self.__run_npm_script("build")
        self.__logger.info("built GUI")
        self.__logger.info("exporting GUI build")
        self.__run_npm_script("export")
        self.__logger.info("exported GUI build")

        gui_out_dir_path = self.__gui_dir_path / "out"

        if not gui_out_dir_path.is_dir():
            raise RuntimeError(
                f"build command returned success but {gui_out_dir_path} does not exist"
            )

        return gui_out_dir_path

    def __clean_gui(self, gui_dir_path: Path):
        self.__run_npm_script("clean", gui_dir_path=gui_dir_path)

    def __run_npm_script(self, script):
        subprocess_env = os.environ.copy()
        subprocess_env["DATA_DIRECTORY_PATH"] = str(self.__data_dir_path)
        self.__logger.info("using DATA_DIRECTORY_PATH = %s", self.__data_dir_path)
        subprocess_env["EDITOR"] = ""

        args = ["npm", "run", script]
        self.__logger.info("running %s", args)
        subprocess_ret = subprocess.call(
            args, cwd=str(self.__gui_dir_path), env=subprocess_env, shell=True,
        )
        self.__logger.info("%s returned %d", args, subprocess_ret)

        if subprocess_ret != 0:
            self.__logger.warning(
                "npm %s script returned non-zero: %d", script, subprocess_ret
            )
            sys.exit(subprocess_ret)
