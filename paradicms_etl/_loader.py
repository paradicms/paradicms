from abc import ABC, abstractmethod
from pathlib import Path
from typing import Generator, Optional

from paradicms_etl._model import _Model
from paradicms_etl._pipeline_phase import _PipelinePhase


class _Loader(_PipelinePhase):
    def __init__(
        self,
        *,
        data_dir_path: Optional[Path] = None,
        loaded_data_dir_path: Optional[Path] = None,
        **kwds
    ):
        """
        Construct a loader.

        If loaded_data_dir_path is specified, use it for the loader's outputs.
        If data_dir_path is specified, use data_dir_path / pipeline_id / "loaded".
        If neither is specified, use the default data_dir_path in the repository / pipeline_id / "loaded".
        """

        _PipelinePhase.__init__(self, **kwds)
        self.__data_dir_path = data_dir_path
        self.__loaded_data_dir_path = loaded_data_dir_path

    @abstractmethod
    def load(self, *, force: bool, models: Generator[_Model, None, None]):
        """
        Load models from the given generator.
        :param force: force loading, ignoring any cached data
        :param models: generator of models to load, normally the result of the transformer
        """

    @property
    def _loaded_data_dir_path(self) -> Path:
        """
        Directory to use to store loaded data.
        The directory is created on demand when this method is called.
        A loader does not have to use this directory. It can load data into an external database, for example.
        """

        if self.__loaded_data_dir_path is not None:
            loaded_data_dir_path = self.__loaded_data_dir_path
        elif self.__data_dir_path is not None:
            loaded_data_dir_path = self.__data_dir_path / self._pipeline_id / "loaded"
        else:
            raise ValueError("must specify loaded_data_dir_path or data_dir_path")
        loaded_data_dir_path.mkdir(parents=True, exist_ok=True)
        return loaded_data_dir_path
