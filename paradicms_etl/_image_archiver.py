import logging
from abc import ABC, abstractmethod
from pathlib import Path

from rdflib import URIRef


class _ImageArchiver(ABC):
    def __init__(self, **kwds):
        self.__logger = logging.getLogger(self.__class__.__name__)

    @abstractmethod
    def archive_image(self, *, image_file_path: Path) -> URIRef:
        """
        Archive an image at the given file path.
        Assumes the file path is transient.
        :return URL of the archived image
        """

    @property
    def _logger(self):
        return self.__logger
