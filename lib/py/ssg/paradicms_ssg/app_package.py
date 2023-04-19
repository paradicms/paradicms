import logging
import os
import shutil
import subprocess
from pathlib import Path
from typing import List, Union, Tuple

import sys


class AppPackage:
    """
    Wrapper around the "script"'s of a package.json, which are invoked by running npm.
    The gui/app package.json's have a standard set of scripts, which invoke Next.js command line commands such as "build" and "dev".
    """

    def __init__(self, *, app: Union[str, Path]):
        """
        :param app: name of an app (in app/ of this repository) or path to an app
        """

        self.__logger = logging.getLogger(self.__class__.__name__)

        if isinstance(app, Path):
            app_dir_path = app
        elif os.path.isdir(app):
            app_dir_path = Path(app)
        else:
            for apps_dir_path in (
                Path("/paradicms/app"),
                Path(__file__).parent.parent.parent.parent.parent / "app",
            ):
                app_dir_path = apps_dir_path / app
                if app_dir_path.is_dir():
                    break
        if not app_dir_path.is_dir():
            raise ValueError(f"{app_dir_path} does not exist")

        self.__app_dir_path = app_dir_path

    def build(self, *, data_file_paths: Tuple[Path, ...]) -> Path:
        """
        Build the app
        :return: directory path to the built site
        """

        if not data_file_paths:
            raise ValueError("must specify at least one data file path")

        self.__logger.info("building app")

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

        self.__run_script(
            "build",
            data_file_paths=data_file_paths,
        )
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
            self.__run_script("export", timeout=45)
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

    def dev(self, *, data_file_paths: Tuple[Path, ...] = ()):
        if not data_file_paths:
            raise ValueError("must specify at least one data file path")

        self.__run_script("dev", data_file_paths=data_file_paths)

    @property
    def app_dir_path(self) -> Path:
        return self.__app_dir_path

    def __run_script(
        self,
        script,
        check=True,
        data_file_paths: Tuple[Path, ...] = (),
        shell=None,
        **kwds,
    ):
        subprocess_env = os.environ.copy()
        if data_file_paths:
            subprocess_env["DATA_FILE_PATHS"] = os.path.pathsep.join(
                str(data_file_path) for data_file_path in data_file_paths
            )
        subprocess_env["EDITOR"] = ""
        self.__logger.info("subprocess environment variables: %s", subprocess_env)

        args: Union[str, List[str]] = ["yarn", script]

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
                subdir_size, subdir_file_count = AppPackage.__get_dir_size(
                    Path(entry.path)
                )
                dir_size += subdir_size
                file_count += subdir_file_count
        return dir_size, file_count
