from pathlib import Path
from typing import Optional


class ExistingFileExtractor:
    """
    Extractor that's parameterized with an existing file path (or file name in the _extracted_data_dir_path) and returns it.
    """

    def __init__(
        self,
        *,
        file_name: Optional[str] = None,
        file_path: Optional[Path] = None,
    ):
        if file_path is not None:
            self.__file_name = None
            self.__file_path = file_path
        elif file_name is not None:
            self.__file_name = file_name
            self.__file_path = None
        else:
            raise ValueError("must specify file_name or file_path")

    def __call__(self, *, extracted_data_dir_path: Path, **kwds):
        if self.__file_path is not None:
            file_path = self.__file_path
        else:
            file_path = extracted_data_dir_path / self.__file_name
        if not file_path.is_file():
            raise ValueError(str(self.__file_path) + " does not exist")
        return {"file_path": file_path}
