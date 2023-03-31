import dataclasses
import logging
import os
from abc import ABC, abstractmethod
from pathlib import Path
from tempfile import TemporaryDirectory
from typing import TypeVar, Generic, Type

import sys
import yaml
from configargparse import ArgParser

from paradicms_etl.loader import Loader
from paradicms_ssg.deployers.fs_deployer import FsDeployer
from paradicms_ssg.github_action_inputs import GitHubActionInputs
from paradicms_ssg.loaders.app_loader import AppLoader

InputsT = TypeVar("InputsT", bound=GitHubActionInputs)


class GitHubAction(ABC, Generic[InputsT]):
    """
    Abstract base class for static site-generating GitHub Actions.
    """

    def __init__(
        self, *, data_dir_path: Path, dev: bool, force_extract: bool, inputs: InputsT
    ):
        self.__data_dir_path = data_dir_path
        self.__dev = dev
        self._force_extract = force_extract
        self._inputs = inputs
        self.__logger = logging.getLogger(__name__)

    def _create_loader(self) -> Loader:
        return AppLoader(
            app_configuration=Path(self._inputs.app_configuration_file_path)
            if self._inputs.app_configuration_file_path
            else None,
            deployer=FsDeployer(
                # We're running in an environment that's never been used before, so no need to archive
                archive=False,
                # We're also running in Docker, which usually means that the GUI's out directory is on a different mount
                # than the directory we're "deploying" to, and we need to use copy instead of rename.
                copy=True,
                deploy_dir_path=Path(self._inputs.build_directory_path).absolute(),
            ),
            dev=self.__dev,
            loaded_data_dir_path=self.__data_dir_path / "loaded",
            pipeline_id=self._inputs.pipeline_id,
        )

    @property
    def _extracted_data_dir_path(self) -> Path:
        return self.__data_dir_path / "extracted"

    @classmethod
    def __generate_action_yml(cls):
        action_yaml = {
            "author": "Minor Gordon",
            "branding": {
                "icon": "loader",
            },
            "description": cls.__doc__.strip(),
            "inputs": cls._inputs_class.fields_yaml,
            "name": cls.__doc__.strip(),
            "runs": {"image": "Dockerfile", "using": "docker"},
        }

        action_yml_file_path = (
            Path(sys.modules[cls.__module__].__file__).parent / "action.yml"
        ).absolute()
        with open(action_yml_file_path, "w+") as action_yml_file:
            yaml.dump(
                {key: action_yaml[key] for key in sorted(action_yaml.keys())},
                action_yml_file,
            )

    @classmethod
    def main(cls):
        if len(sys.argv) > 1:
            # ArgParse/ArgumentParser has no notion of a "default subparser"
            # https://stackoverflow.com/questions/46963172/how-do-you-get-argparse-to-choose-a-default-subparser
            # Hack it here instead of forcing actions to require a subparser command like "run".
            command = sys.argv[1].lower()
            if command == "generate-action-yml":
                cls.__generate_action_yml()
                return

        args = cls.__parse_args()

        if args.debug:
            logging.basicConfig(level=logging.DEBUG)
        else:
            logging.basicConfig(level=logging.INFO)

        inputs = cls.__parse_inputs(args)

        # Instantiate this class and call its _run()
        cls_kwds = {
            "dev": bool(args.dev),
            "force_extract": bool(args.force_extract),
            "inputs": inputs,
        }
        if args.data_dir_path:
            cls_kwds["data_dir_path"] = args.data_dir_path
            cls(**cls_kwds)._run()
        else:
            with TemporaryDirectory() as temp_dir:
                cls_kwds["data_dir_path"] = Path(temp_dir)
                cls(**cls_kwds)._run()

    @classmethod
    @property
    def _inputs_class(cls) -> Type[InputsT]:
        raise NotImplementedError

    @classmethod
    def __parse_args(cls):
        arg_parser = ArgParser()

        arg_parser.add_argument(
            "-c", is_config_file=True, help="path to a file to read arguments from"
        )
        arg_parser.add_argument(
            "--data-dir-path",
            help="path to a directory to store extracted and loaded data",
            type=Path,
        )
        arg_parser.add_argument(
            "--dev",
            action="store_true",
            help="start the app in dev mode rather than building it",
        )
        arg_parser.add_argument(
            "--force-extract",
            action="store_true",
            help="force extraction, ignoring any cached files",
        )

        for field in dataclasses.fields(cls._inputs_class):
            arg_name = "--" + field.name.replace("_", "-")
            if not issubclass(field.type, str):
                raise TypeError(field.type)
            arg_parser.add_argument(
                arg_name,
                env_var="INPUT_" + field.name.upper(),
                required=id(field.default) == id(GitHubActionInputs.REQUIRED),
            )

        return arg_parser.parse_args()

    @classmethod
    def __parse_inputs(cls, args) -> InputsT:
        inputs_kwds = {}
        for key, value in vars(args).items():
            if value is None:
                continue
            elif key in {"c", "data_dir_path", "dev", "force_extract"}:
                continue
            elif isinstance(value, str):
                stripped_value = value.strip()
                if stripped_value:
                    inputs_kwds[key] = stripped_value
            else:
                raise TypeError(type(value))
        if "pipeline_id" not in inputs_kwds:
            inputs_kwds["pipeline_id"] = os.environ["GITHUB_REPOSITORY"].rsplit("/", 1)[
                -1
            ]
        return cls._inputs_class(**inputs_kwds)

    @abstractmethod
    def _run(self):
        raise NotImplementedError
