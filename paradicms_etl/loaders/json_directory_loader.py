import json
from enum import Enum
from shutil import rmtree

import stringcase
from pathvalidate import sanitize_filename

from paradicms_etl.loaders._buffering_loader import _BufferingLoader
from paradicms_etl.utils.json_utils import (
    json_dump_default,
    model_to_json_object,
)


class JsonDirectoryLoader(_BufferingLoader):
    def __init__(self, *, clean: bool = False, **kwds):
        _BufferingLoader.__init__(self, **kwds)
        self.__clean = clean

    def _flush(self, models):
        loaded_data_dir_path = self._loaded_data_dir_path
        if self.__clean:
            rmtree(self._loaded_data_dir_path)
        self._loaded_data_dir_path.mkdir(exist_ok=True)

        json_objects_by_type = {}
        for model in models:
            json_objects_by_type.setdefault(model.__class__.__name__, []).append(model)

        for class_name, json_objects in json_objects_by_type.items():
            with open(
                loaded_data_dir_path / (stringcase.camelcase(class_name) + ".json"),
                "w+",
                newline="\n",
            ) as file_:
                json.dump(
                    tuple(json_objects),
                    file_,
                    default=json_dump_default,
                )
