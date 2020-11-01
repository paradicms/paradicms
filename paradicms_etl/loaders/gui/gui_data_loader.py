import json

import stringcase

from paradicms_etl.loaders.json_directory_loader import JsonDirectoryLoader
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.property_definition import PropertyDefinition


class GuiDataLoader(JsonDirectoryLoader):
    def __init__(self, *, clean: bool = True, **kwds):
        JsonDirectoryLoader.__init__(self, clean=clean, **kwds)

    def _flush(self, *args, **kwds):
        JsonDirectoryLoader._flush(self, *args, **kwds)

        # The GUI builders depend on certain files existing.
        for model_class in (Collection, Image, Institution, PropertyDefinition):
            file_path = self._loaded_data_dir_path / (
                stringcase.camelcase(model_class.__name__) + ".json"
            )
            if file_path.is_file():
                continue
            with open(file_path, "w+") as json_file:
                json.dump([], json_file)
            self._logger.warning("missing file %s, created empty", file_path)
