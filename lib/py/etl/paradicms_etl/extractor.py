from typing import Dict, Optional, Protocol, Any


class Extractor(Protocol):
    def __call__(self, *, force: bool) -> Optional[Dict[str, Any]]:
        pass
