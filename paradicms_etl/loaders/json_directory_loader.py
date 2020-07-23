import json
from pathlib import Path
from shutil import rmtree
from typing import Generator

import stringcase
from pathvalidate import sanitize_filename

from paradicms_etl._loader import _Loader
from paradicms_etl._model import _Model
from paradicms_etl.loaders._file_loader import _FileLoader
from paradicms_etl.loaders.json_file_loader import JsonFileLoader
from paradicms_etl.pipeline_storage import PipelineStorage


class JsonDirectoryLoader(_Loader):
    def __init__(self, *, directory_path: Path, clean: bool = False, **kwds):
        _FileLoader.__init__(self, **kwds)
        self.__clean = clean
        self.__directory_path = directory_path

    def load(self, *, force: bool, models: Generator[_Model, None, None], storage: PipelineStorage):
        directory_path = self.__directory_path
        if directory_path is None:
            directory_path = storage.transformed_data_dir_path / sanitize_filename(self._pipeline_id)
        if self.__clean and directory_path.is_dir():
            rmtree(directory_path)
        directory_path.mkdir(parents=False, exist_ok=True)

        json_objects_by_class_name = {}
        for model in models:
            json_objects_by_class_name.setdefault(model.__class__.__name__, []).append(model.to_dict())

        json_objects_by_class_name = JsonFileLoader.remove_nulls(json_objects_by_class_name)

        for class_name, json_objects in json_objects_by_class_name.items():
            file_path = directory_path / (stringcase.camelcase(class_name) + ".json")
            with open(file_path, "w+") as file_:
                json.dump(json_objects, file_)
