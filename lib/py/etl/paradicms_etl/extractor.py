from pathlib import Path
from typing import Dict, Optional, Protocol, Any


class Extractor(Protocol):
    def __call__(
        self, *, extracted_data_dir_path: Path, force: bool, pipeline_id: str
    ) -> Optional[Dict[str, Any]]:
        pass
