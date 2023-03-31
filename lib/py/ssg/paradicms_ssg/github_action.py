import logging
from abc import ABC, abstractmethod
from pathlib import Path
from tempfile import TemporaryDirectory
from typing import TypeVar, Generic, Type

import sys
import yaml

from paradicms_etl.loader import Loader
from paradicms_ssg.deployers.fs_deployer import FsDeployer
from paradicms_ssg.github_action_inputs import GitHubActionInputs
from paradicms_ssg.loaders.app_loader import AppLoader

InputsT = TypeVar("InputsT", bound=GitHubActionInputs)


class GitHubAction(ABC, Generic[InputsT]):
    """
    Abstract base class for static site-generating GitHub Actions.
    """

    def __init__(self, *, data_dir_path: Path, inputs: InputsT):
        self.__data_dir_path = data_dir_path
        self._inputs = inputs
        if self._inputs.debug:
            logging.basicConfig(level=logging.DEBUG)
        else:
            logging.basicConfig(level=logging.INFO)
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
            dev=self._inputs.dev,
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

        with TemporaryDirectory() as temp_dir:
            cls(
                inputs=cls._inputs_class.from_args(), temp_dir_path=Path(temp_dir)
            )._run()

    @classmethod
    @property
    def _inputs_class(cls) -> Type[InputsT]:
        raise NotImplementedError

    @abstractmethod
    def _run(self):
        raise NotImplementedError

    # def __mkdir(self, dir_path: Path) -> None:
    #     if dir_path.is_dir():
    #         self.__logger.debug("directory %s already exists", dir_path)
    #         return
    #     elif dir_path.exists():
    #         raise IOError("%s already exists and is not a directory", dir_path)
    #     else:
    #         dir_path.mkdir(parents=True, exist_ok=True)
    #         self.__logger.debug("created directory %s", dir_path)
