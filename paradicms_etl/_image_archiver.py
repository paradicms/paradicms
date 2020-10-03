import logging
from abc import ABC


class _ImageArchiver(ABC):
    def __init__(self):
        self.__logger = logging.getLogger(self.__class__.__name__)

    @property
    def _logger(self):
        return self.__logger
