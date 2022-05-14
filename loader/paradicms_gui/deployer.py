import logging
from abc import ABC, abstractmethod
from pathlib import Path


class Deployer(ABC):
    def __init__(self, **kwds):
        self.__logger = logging.getLogger(self.__class__.__name__)

    @abstractmethod
    def deploy(self, *, app_out_dir_path: Path) -> None:
        """
        Deploy a previously-built GUI.

        :param app_out_dir_path: path to the Next.js "out" directory produced by a build + export.
        """

    @property
    def _logger(self):
        return self.__logger
