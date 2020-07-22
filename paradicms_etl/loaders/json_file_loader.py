import json
from typing import Callable, Dict, Generator, Optional

from pathvalidate import sanitize_filename

from paradicms_etl._model import _Model
from paradicms_etl.loaders._file_loader import _FileLoader
from paradicms_etl.pipeline_storage import PipelineStorage


class JsonFileLoader(_FileLoader):
    def __init__(self, *, models_to_json: Optional[Callable[[Generator[_Model, None, None]], object]] = None, **kwds):
        _FileLoader.__init__(self, **kwds)
        self.__models_to_json = models_to_json

    def load(self, *, force: bool, models: Generator[_Model, None, None], storage: PipelineStorage):
        file_path = self._file_path
        if file_path is None:
            file_path = storage.transformed_data_dir_path / (sanitize_filename(self._pipeline_id) + ".json")

        if self.__models_to_json is not None:
            json_ = self.__models_to_json(models)
        else:
            json_objects_by_class_name = {}
            for model in models:
                json_objects_by_class_name.setdefault(model.__class__.__name__, []).append(model.to_dict())

            def remove_nulls(json_value):
                if isinstance(json_value, dict):
                    return {key: remove_nulls(value) for key, value in json_value.items() if value is not None}
                elif isinstance(json_value, list):
                    return [remove_nulls(value) for value in json_value]
                else:
                    return json_value

            json_ = remove_nulls(json_objects_by_class_name)

        with open(file_path, "w+") as file_:
            json.dump(json_, file_, indent=4)
