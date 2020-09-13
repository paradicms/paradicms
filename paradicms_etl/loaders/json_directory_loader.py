import json
from enum import Enum
from shutil import rmtree
from typing import Generator

import stringcase
from pathvalidate import sanitize_filename

from paradicms_etl._loader import _Loader
from paradicms_etl._model import _Model
from paradicms_etl.loaders._buffering_loader import _BufferingLoader
from paradicms_etl.loaders._file_loader import _FileLoader
from paradicms_etl.loaders.json_utils import json_dump_default, json_remove_nulls


class JsonDirectoryLoader(_BufferingLoader):
    class Strategy(Enum):
        # Create one file per model. Group the files by model type into subdirectories so they can be picked up correctly by Gatsby.
        # This is useful when multiple pipelines load to the same directory tree.
        FILE_PER_MODEL = 1

        # Create one file per model type, with all files in the same directory.
        # This is used when only a single pipeline loads to the same directory tree.
        FILE_PER_MODEL_TYPE = 2

    def __init__(
        self,
        *,
        clean: bool = False,
        strategy: Strategy = Strategy.FILE_PER_MODEL_TYPE,
        **kwds
    ):
        _BufferingLoader.__init__(self, **kwds)
        self.__clean = clean
        self.__strategy = strategy

    def _flush(self, models):
        loaded_data_dir_path = self._loaded_data_dir_path
        if self.__clean:
            rmtree(self._loaded_data_dir_path)
        self._loaded_data_dir_path.mkdir(exist_ok=True)

        json_objects_by_type = {}
        for model in models:
            assert model.uri is not None
            class_json_objects = json_objects_by_type.setdefault(
                model.__class__.__name__, {}
            )
            # existing_model = class_json_objects.get(str(model.uri))
            # if existing_model is None:
            class_json_objects[str(model.uri)] = json_remove_nulls(model.to_dict())
            # else:
            #     assert existing_model == model, model.uri

        if self.__strategy == self.Strategy.FILE_PER_MODEL:
            for class_name, json_objects in json_objects_by_type.items():
                class_directory_path = loaded_data_dir_path / stringcase.camelcase(
                    class_name
                )
                class_directory_path.mkdir(exist_ok=True)
                for uri, json_object in json_objects.items():
                    file_path = class_directory_path / (
                        sanitize_filename(uri) + ".json"
                    )
                    with open(file_path, "w+", newline="\n") as file_:
                        json.dump(json_object, file_, default=json_dump_default)
        elif self.__strategy == self.Strategy.FILE_PER_MODEL_TYPE:
            for class_name, json_objects_by_uri in json_objects_by_type.items():
                with open(
                    loaded_data_dir_path / (stringcase.camelcase(class_name) + ".json"),
                    "w+",
                    newline="\n",
                ) as file_:
                    json.dump(
                        tuple(json_objects_by_uri[uri] for uri in sorted(json_objects_by_uri.keys())), file_, default=json_dump_default
                    )
        else:
            raise NotImplemented(self.__strategy)
