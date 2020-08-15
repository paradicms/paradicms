import logging
from abc import ABC
from pathlib import Path


class _PipelinePhase(ABC):
    _DATA_DIR_PATH_DEFAULT = Path(__file__).absolute().parent.parent / "data"

    def __init__(self, *, pipeline_id: str, **kwds):
        self.__logger = logging.getLogger(self.__class__.__name__)
        self.__pipeline_id = pipeline_id

    @property
    def _logger(self):
        return self.__logger

    @property
    def _pipeline_id(self):
        return self.__pipeline_id

    @property
    def _pipeline_uri(self):
        from ._pipeline import _Pipeline
        return _Pipeline.id_to_uri(self._pipeline_id)
