import os.path
from pathlib import Path


class PipelineStorage:
    def __init__(self, *, extracted_data_dir_path: Path, transformed_data_dir_path: Path):
        self.__extracted_data_dir_path = extracted_data_dir_path
        self.__transformed_data_dir_path = transformed_data_dir_path

    @classmethod
    def create(cls, *, data_dir_path: Path, pipeline_id: str):
        def makedirs(dir_path: Path) -> Path:
            if not dir_path.is_dir():
                os.makedirs(dir_path)
            return dir_path
        return \
            cls(
                extracted_data_dir_path=makedirs(data_dir_path / pipeline_id / "extracted"),
                transformed_data_dir_path=makedirs(data_dir_path / pipeline_id / "transformed")
            )

    def extracted_data_dir_path(self) -> Path:
        return self.__extracted_data_dir_path

    def transformed_data_dir_path(self) -> Path:
        return self.__transformed_data_dir_path
