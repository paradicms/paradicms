from pathlib import Path
from typing import Iterable, Protocol, Any

from paradicms_etl.model import Model


class Loader(Protocol):
    def __call__(
        self, *, flush: bool, loaded_data_dir_path: Path, models: Iterable[Model]
    ) -> Any:
        pass
