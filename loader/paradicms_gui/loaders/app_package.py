import logging
import os
import shutil
import subprocess
import sys
from pathlib import Path
from typing import Optional, Union


class AppPackage:
    """
    Wrapper around the "script"'s of a package.json, which are invoked by running npm.
    The gui/app package.json's have a standard set of scripts, which invoke Next.js command line commands such as "build" and "dev".
    """

    def __init__(self, *, app: Union[str, Path], base_url_path: str = ""):
        """
        :param base_url_path: Next.js basePath (https://nextjs.org/docs/api-reference/next.config.js/basepath)
        :param app: name of an app (in app/ of this repository) or path to an app
        """

        self.__logger = logging.getLogger(self.__class__.__name__)

        self.__base_url_path = base_url_path

        if isinstance(app, Path):
            app_dir_path = app
        elif os.path.isdir(app):
            app_dir_path = Path(self.__app)
        else:
            app_dir_path = Path(__file__).parent.parent.parent.parent / "app" / app
        if not app_dir_path.is_dir():
            raise ValueError(f"{app_dir_path} does not exist")

        self.__app_dir_path = app_dir_path

    def build(self, data_ttl_file_path: Path) -> Path:
        """
        Build the GUI
        :return: directory path to the built site
        """

        self.__logger.info("building GUI")

        app_out_dir_path = self.__app_dir_path / "out"
        app_public_dir_path = self.__app_dir_path / "public"

        if app_public_dir_path.is_dir():
            app_public_dir_path_exists = True
            public_dir_size, public_file_count = self.__get_dir_size(
                app_public_dir_path
            )
            self.__logger.info(
                "public directory: file count=%d, size=%d",
                public_file_count,
                public_dir_size,
            )
        else:
            app_public_dir_path_exists = False

        self.__run_script("build", data_ttl_file_path=data_ttl_file_path)
        self.__logger.info("built GUI")

        # Hack: next export hangs if there is a public directory, but only in the GitHub Action
        # Manually move the contents of the public directory over to the out directory
        temp_app_public_dir_path = self.__app_dir_path / "public.bak"
        if app_public_dir_path_exists:
            app_public_dir_path.rename(temp_app_public_dir_path)
            self.__logger.info(
                "renamed %s to %s", app_public_dir_path, temp_app_public_dir_path
            )
        try:
            self.__logger.info("exporting GUI build")
            self.__run_script(
                "export", data_ttl_file_path=data_ttl_file_path, timeout=45
            )
            self.__logger.info("exported GUI build")
        finally:
            if app_public_dir_path_exists:
                temp_app_public_dir_path.rename(app_public_dir_path)
                self.__logger.info(
                    "renamed %s to %s", temp_app_public_dir_path, app_public_dir_path
                )

        if app_public_dir_path_exists:
            for file_name in os.listdir(app_public_dir_path):
                src_file_path = app_public_dir_path / file_name
                dst_file_path = app_out_dir_path / file_name
                if src_file_path.is_file():
                    shutil.copyfile(src_file_path, dst_file_path)
                elif src_file_path.is_dir():
                    shutil.copytree(src_file_path, dst_file_path)
                self.__logger.info("copied %s to %s", src_file_path, dst_file_path)

        if not app_out_dir_path.is_dir():
            raise RuntimeError(
                f"build command returned success but {app_out_dir_path} does not exist"
            )

        return app_out_dir_path

    def clean(self):
        self.__run_script("clean")

    def dev(self, data_ttl_file_path: Path):
        self.__run_script("dev", data_ttl_file_path=data_ttl_file_path)

    @property
    def app_dir_path(self) -> Path:
        return self.__app_dir_path

    def __run_script(
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

        args = ["yarn", script]

        if shell is None:
            shell = sys.platform == "win32"
        if shell and sys.platform != "win32":
            args = " ".join(args)

        self.__logger.info("running %s", args)
        try:
            subprocess.run(
                args,
                check=check,
                cwd=str(self.__app_dir_path),
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
                subdir_size, subdir_file_count = AppPackage.__get_dir_size(entry.path)
                dir_size += subdir_size
                file_count += subdir_file_count
        return dir_size, file_count
