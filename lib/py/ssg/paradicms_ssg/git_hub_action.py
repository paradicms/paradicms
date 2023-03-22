import logging
from abc import ABC, abstractmethod
from pathlib import Path
from tempfile import TemporaryDirectory
from typing import TypeVar, Generic, Type

from paradicms_etl.loader import Loader
from paradicms_ssg.deployers.fs_deployer import FsDeployer
from paradicms_ssg.github_actions_inputs import GitHubActionInputs
from paradicms_ssg.loaders.app_loader import AppLoader

InputsT = TypeVar("InputsT", bound=GitHubActionInputs)


class GitHubAction(ABC, Generic[InputsT]):
    """
    Abstract base class for static site-generating GitHub Actions.
    """

    def __init__(self, *, inputs: InputsT, temp_dir_path: Path):
        self._inputs = inputs
        if self._inputs.debug:
            logging.basicConfig(level=logging.DEBUG)
        else:
            logging.basicConfig(level=logging.INFO)
        self.__logger = logging.getLogger(__name__)
        self.__temp_dir_path = temp_dir_path

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
            loaded_data_dir_path=self.__temp_dir_path / "loaded",
            pipeline_id=self._inputs.pipeline_id,
        )

    @property
    def _extracted_data_dir_path(self) -> Path:
        return self.__temp_dir_path / "extracted"

    @classmethod
    def main(cls):
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
