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

        gui_public_dir_path = self.__gui_dir_path / "public"
        if gui_public_dir_path.is_dir():
            public_dir_size, public_file_count = self.__get_dir_size(
                gui_public_dir_path
            )
            self.__logger.info(
                "public directory: file count=%d, size=%d",
                public_file_count,
                public_dir_size,
            )

        self.__run_npm_script("build", data_ttl_file_path=data_ttl_file_path)
        self.__logger.info("built GUI")

        self.__logger.info("exporting GUI build")
        self.__run_npm_script(
            "export",
            capture_output=True,
            check=False,
            data_ttl_file_path=data_ttl_file_path,
            timeout=120,
        )
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

    def __run_npm_script(
        self,
        script,
        check=True,
        data_ttl_file_path: Optional[Path] = None,
        shell=None,
        **kwds,
    ):
        subprocess_env = os.environ.copy()
        if self.__base_url_path:
            subprocess_env["GUI_BASE_URL_PATH"] = self.__base_url_path
            self.__logger.info("using GUI_BASE_URL_PATH = %s", self.__base_url_path)
        if data_ttl_file_path is not None:
            subprocess_env["DATA_TTL_FILE_PATH"] = str(data_ttl_file_path)
            self.__logger.info("using DATA_TTL_FILE_PATH = %s", data_ttl_file_path)
        subprocess_env["EDITOR"] = ""

        args = ["npm", "run", script]
        if shell is None:
            shell = sys.platform == "win32"
        if shell and sys.platform != "win32":
            args = " ".join(args)

        self.__logger.info("running %s", args)
        try:
            subprocess.run(
                args,
                check=check,
                cwd=str(self.__gui_dir_path),
                env=subprocess_env,
                shell=shell,
                **kwds,
            )
            self.__logger.info("completed %s", args)
        except subprocess.TimeoutExpired:
            self.__logger.warning("timed out on %s", args)

    @staticmethod
    def __get_dir_size(dir_path: Path):
        dir_size = file_count = 0
        for entry in os.scandir(dir_path):
            assert not entry.is_symlink()
            if entry.is_file():
                file_count += 1
                dir_size += entry.stat().st_size
            elif entry.is_dir():
                subdir_size, subdir_file_count = GuiBuilder.__get_dir_size(entry.path)
                dir_size += subdir_size
                file_count += subdir_file_count
        return dir_size, file_count
