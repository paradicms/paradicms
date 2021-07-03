from dataclasses import dataclass
from pathlib import Path
from typing import Dict, Tuple


@dataclass(frozen=True)
class MarkdownDirectory:
    @dataclass(frozen=True)
    class ImageFileEntry:
        model_id: str
        mime_type: str
        path: Path

    @dataclass(frozen=True)
    class MarkdownFileEntry:
        markdown_source: str
        model_type: str
        model_id: str

    image_file_entries: Tuple[ImageFileEntry, ...]
    markdown_file_entries: Tuple[MarkdownFileEntry, ...]

    @property
    def markdown_file_entries_by_model_type(
        self,
    ) -> Dict[str, Tuple[MarkdownFileEntry, ...]]:
        result = {}
        for entry in self.markdown_file_entries:
            result.setdefault(entry.model_type, []).append(entry)
        return {model_type: tuple(entries) for model_type, entries in result.items()}
