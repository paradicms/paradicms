import logging
from abc import ABC, abstractmethod
from pathlib import Path
from typing import Optional
from urllib.request import urlretrieve

from pathvalidate import sanitize_filename
from rdflib import URIRef

from paradicms_etl._image_archiver import _ImageArchiver


class _ImageFileArchiver(_ImageArchiver):
    @abstractmethod
    def archive_image(self, *, image_file_path: Path) -> URIRef:
        """
        Archive an image at the given file path.
        Assumes the file path is transient.
        :return URL of the archived image
        """
