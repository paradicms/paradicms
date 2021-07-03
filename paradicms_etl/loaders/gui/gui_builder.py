import logging
import os
import subprocess
import sys
from pathlib import Path
from typing import Optional, Union


class GuiBuilder:
    def __init__(self, *, gui: Union[str, Path], base_url_path: str = ""):
        """
        :param base_url_path: Next.js basePath (https://nextjs.org/docs/api-reference/next.config.js/basepath)
        :param gui: name of a gui (in gui/ of this repository) or path to a gui
        """

        self.__logger = logging.getLogger(self.__class__.__name__)

        self.__base_url_path = base_url_path

        if isinstance(gui, Path):
            gui_dir_path = gui
        elif os.path.isdir(gui):
            gui_dir_path = Path(self.__gui)
        else:
            gui_dir_path = (
                Path(__file__).parent.parent.parent.parent.parent / "gui" / "app" / gui
            )
        if not gui_dir_path.is_dir():
            raise ValueError(f"{gui_dir_path} does not exist")

        self.__gui_dir_path = gui_dir_path

    def build(self, data_ttl_file_path: Path) -> Path:
        """
        Build the GUI
        :return: directory path to the built site
        """

        self.__logger.info("building GUI")
        self.__run_npm_script("build", data_ttl_file_path=data_ttl_file_path)
        self.__logger.info("built GUI")
        self.__logger.info("exporting GUI build")
        self.__run_npm_script("export", data_ttl_file_path=data_ttl_file_path)
        self.__logger.info("exported GUI build")

        gui_out_dir_path = self.__gui_dir_path / "out"

        if not gui_out_dir_path.is_dir():
            raise RuntimeError(
                f"build command returned success but {gui_out_dir_path} does not exist"
            )

        return gui_out_dir_path

    def clean(self):
        self.__run_npm_script("clean")

    @property
    def gui_dir_path(self) -> Path:
        return self.__gui_dir_path

    def __run_npm_script(self, script, data_ttl_file_path: Optional[Path] = None):
        subprocess_env = os.environ.copy()
        if self.__base_url_path:
            subprocess_env["GUI_BASE_URL_PATH"] = self.__base_url_path
            self.__logger.info("using GUI_BASE_URL_PATH = %s", self.__base_url_path)
        if data_ttl_file_path is not None:
            subprocess_env["DATA_TTL_FILE_PATH"] = str(data_ttl_file_path)
            self.__logger.info("using DATA_TTL_FILE_PATH = %s", data_ttl_file_path)
        subprocess_env["EDITOR"] = ""

        args = ["npm", "run", script]
        self.__logger.info("running %s", args)
        completed_process = subprocess.run(
            args,
            cwd=str(self.__gui_dir_path),
            env=subprocess_env,
            shell=sys.platform == "win32",  # os.environ.get("CI") is None,
        )

        if completed_process.returncode != 0:
            self.__logger.warning(
                "%s in %s returned non-zero: %d",
                args,
                self.__gui_dir_path,
                completed_process.returncode,
            )
            sys.exit(completed_process.returncode)
