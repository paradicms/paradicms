import json
from typing import Generator

from pathvalidate import sanitize_filename

from paradicms_etl._model import _Model
from paradicms_etl.loaders._file_loader import _FileLoader


class JsonFileLoader(_FileLoader):
    def load(self, *, force: bool, models: Generator[_Model, None, None]):
        file_path = self._file_path
        if file_path is None:
            file_path = self._loaded_data_dir_path / (sanitize_filename(self._pipeline_id) + ".json")

        json_objects_by_class_name = {}
        for model in models:
            json_objects_by_class_name.setdefault(model.__class__.__name__, []).append(model.to_dict())

        json_objects_by_class_name = JsonFileLoader.remove_nulls(json_objects_by_class_name)

        with open(file_path, "w+") as file_:
            json.dump(json_objects_by_class_name, file_, indent=4)

    @staticmethod
    def remove_nulls(json_value):
        if isinstance(json_value, dict):
            return {key: JsonFileLoader.remove_nulls(value) for key, value in json_value.items() if value is not None}
        elif isinstance(json_value, list):
            return [JsonFileLoader.remove_nulls(value) for value in json_value]
        else:
            return json_value
