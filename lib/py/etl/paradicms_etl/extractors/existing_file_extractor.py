from pathlib import Path


class ExistingFileExtractor:
    """
    Extractor that's parameterized with an existing file path (or file name in the _extracted_data_dir_path) and returns it.
    """

    def __init__(
        self,
        *,
        file_path: Path,
    ):
        self.__file_path = file_path

    def __call__(self, **kwds):
        if not self.__file_path.is_file():
            raise ValueError(str(self.__file_path) + " does not exist")
        return {"file_path": self.__file_path}
