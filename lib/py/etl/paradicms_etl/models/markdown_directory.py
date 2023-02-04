from dataclasses import dataclass
from pathlib import Path
from typing import Tuple


@dataclass(frozen=True)
class MarkdownDirectory:
    @dataclass(frozen=True)
    class ImageFileEntry:
        mime_type: str
        model_id: str
        model_type: str
        path: Path

    @dataclass(frozen=True)
    class MetadataFileEntry:
        format: str
        model_id: str
        model_type: str
        source: str

    image_file_entries: Tuple[ImageFileEntry, ...]
    metadata_file_entries: Tuple[MetadataFileEntry, ...]
    name: str
