import json
from enum import Enum
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
    class Strategy(Enum):
        # Create one file per model. Group the files by model type into subdirectories so they can be picked up correctly by Gatsby.
        # This is useful when multiple pipelines load to the same directory tree.
        FILE_PER_MODEL = 1

        # Create one file per model type, with all files in the same directory.
        # This is used when only a single pipeline loads to the same directory tree.
        FILE_PER_MODEL_TYPE = 2

    def __init__(
        self, *,
        root_directory_path: Path,
        clean: bool = False,
        gatsby_js: bool = False,
        strategy: Strategy = Strategy.FILE_PER_MODEL,
        **kwds
    ):
        _FileLoader.__init__(self, **kwds)
        self.__clean = clean
        self.__gatsby_js = gatsby_js
        self.__root_directory_path = root_directory_path
        self.__strategy = strategy

    def load(self, *, force: bool, models: Generator[_Model, None, None], storage: PipelineStorage):
        root_directory_path = self.__root_directory_path
        if root_directory_path is None:
            root_directory_path = storage.transformed_data_dir_path / sanitize_filename(self._pipeline_id)
        if self.__clean and root_directory_path.is_dir():
            rmtree(root_directory_path)
        root_directory_path.mkdir(exist_ok=True)

        json_objects_by_type = {}
        for model in models:
            assert model.uri is not None
            class_json_objects = json_objects_by_type.setdefault(model.__class__.__name__, {})
            assert str(model.uri) not in class_json_objects
            class_json_objects[str(model.uri)] = JsonFileLoader.remove_nulls(model.to_dict())

        if self.__strategy == self.Strategy.FILE_PER_MODEL:
            for class_name, json_objects in json_objects_by_type.items():
                if self.__gatsby_js and len(json_objects) == 1:
                    # The gatsby-json-transformer has a problem picking up a directory with a single .json file in it with a top-level object (instead of an array)
                    # Work around this by writing a file with a top-level array instead.
                    with open(root_directory_path / (stringcase.camelcase(class_name) + ".json"), "w+") as file_:
                        json.dump(tuple(json_objects.values()), file_)
                    continue

                class_directory_path = root_directory_path / stringcase.camelcase(class_name)
                class_directory_path.mkdir(exist_ok=True)
                for uri, json_object in json_objects.items():
                    file_path = class_directory_path / (sanitize_filename(uri) + ".json")
                    with open(file_path, "w+") as file_:
                        json.dump(json_object, file_)
        elif self.__strategy == self.Strategy.FILE_PER_MODEL_TYPE:
            for class_name, json_objects in json_objects_by_type.items():
                with open(root_directory_path / (stringcase.camelcase(class_name) + ".json"), "w+") as file_:
                    json.dump(tuple(json_objects.values()), file_)
        else:
            raise NotImplemented(self.__strategy)
