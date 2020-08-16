import json
from typing import Generator

from pathvalidate import sanitize_filename

from paradicms_etl._model import _Model
from paradicms_etl.loaders._file_loader import _FileLoader
from paradicms_etl.loaders.json_utils import json_dump_default, json_remove_nulls


class JsonFileLoader(_FileLoader):
    def load(self, *, force: bool, models: Generator[_Model, None, None]):
        file_path = self._file_path
        if file_path is None:
            file_path = self._loaded_data_dir_path / (
                sanitize_filename(self._pipeline_id) + ".json"
            )

        json_objects_by_class_name = {}
        for model in models:
            json_objects_by_class_name.setdefault(model.__class__.__name__, []).append(
                model.to_dict()
            )

        json_objects_by_class_name = json_remove_nulls(json_objects_by_class_name)

        with open(file_path, "w+") as file_:
            json.dump(
                json_objects_by_class_name, file_, indent=4, default=json_dump_default
            )
