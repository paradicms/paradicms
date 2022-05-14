from pathlib import Path
from typing import Optional

from paradicms_etl.extractor import Extractor


class ExistingFileExtractor(Extractor):
    """
    Extractor that's parameterized with an existing file path (or file name in the _extracted_data_dir_path) and returns it.
    """

    def __init__(
        self,
        *,
        file_name: Optional[str] = None,
        file_path: Optional[Path] = None,
        **kwds
    ):
        Extractor.__init__(self, **kwds)
        if file_path is not None:
            self.__file_path = file_path
        elif file_name is not None:
            self.__file_path = self._extracted_data_dir_path / file_name
        else:
            raise ValueError("must specify file_name or file_path")

    def extract(self, **kwds):
        if not self.__file_path.is_file():
            raise ValueError(str(self.__file_path) + " does not exist")
        return {"file_path": self.__file_path}
