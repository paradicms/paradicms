import logging
import os
from dataclasses import dataclass
from os.path import splitext
from pathlib import Path

from PIL import Image, UnidentifiedImageError


class DirectoryExtractor:
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

    def __init__(self, *, directory_path: Path):
        self.__logger = logging.getLogger(__name__)
        self.__directory_path = directory_path

    def __call__(self, **kwds):
        """
        Extract entries from a directory with the structure:
        other/id.md
        person/id1.md
        person/id2.md
        work/id1.md
        work/id2.md
        """

        image_file_entries = []
        metadata_file_entries = []
        root_dir_path = self.__directory_path.absolute()
        for dir_path, _, file_names in os.walk(root_dir_path):
            dir_path = Path(dir_path)
            if dir_path == root_dir_path:
                continue
            dir_relpath = dir_path.relative_to(root_dir_path)
            if str(dir_relpath).startswith("."):
                self.__logger.debug("skipping hidden directory %s", dir_path)
                continue
            model_type = str(dir_relpath).replace(os.path.sep, "/")
            for file_name in file_names:
                file_name = Path(file_name)
                file_path = dir_path / file_name
                model_id = str(file_name.stem)

                try:
                    with Image.open(str(file_path)) as image:
                        image_format = image.format
                    image_file_entries.append(
                        DirectoryExtractor.ImageFileEntry(
                            mime_type="image/" + image_format.lower(),
                            model_id=model_id,
                            model_type=model_type,
                            path=file_path,
                        )
                    )
                    continue
                except UnidentifiedImageError:
                    pass

                with open(file_path) as metadata_file:
                    metadata_file_entries.append(
                        DirectoryExtractor.MetadataFileEntry(
                            format=splitext(file_name)[1][1:].lower(),
                            model_id=model_id,
                            model_type=model_type,
                            source=metadata_file.read(),
                        )
                    )

        return {
            "directory_name": str(root_dir_path.name),
            "image_file_entries": tuple(image_file_entries),
            "metadata_file_entries": tuple(metadata_file_entries),
        }
