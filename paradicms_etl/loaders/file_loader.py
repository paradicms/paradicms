from pathlib import Path
from typing import Optional

from paradicms_etl.loader import Loader


class FileLoader(Loader):
    def __init__(self, *, file_path: Optional[Path] = None, **kwds):
        Loader.__init__(self, **kwds)
        self.__file_path = file_path

    @property
    def _file_path(self):
        return self.__file_path
