from typing import Dict, Optional, Protocol, Any


class Extractor(Protocol):
    def __call__(
        self,
        *,
        force: bool = False,
    ) -> Optional[Dict[str, Any]]:
        pass
