import logging
import os
from os.path import splitext
from pathlib import Path

from PIL import Image, UnidentifiedImageError

from paradicms_etl.models.markdown_directory import MarkdownDirectory

logger = logging.getLogger(__name__)


def MarkdownDirectoryExtractor(*, extracted_data_dir_path: Path, **kwds):
    """
    Extract entries from a directory with the structure:
    work/id1.md
    work/id2.md
    person/id1.md
    person/id2.md
    other/id.md

    into a MarkdownDirectory dataclass.
    """

    image_file_entries = []
    metadata_file_entries = []
    root_dir_path = extracted_data_dir_path.absolute()
    for dir_path, _, file_names in os.walk(root_dir_path):
        dir_path = Path(dir_path)
        if dir_path == root_dir_path:
            continue
        dir_relpath = dir_path.relative_to(root_dir_path)
        if str(dir_relpath).startswith("."):
            logger.debug("skipping hidden directory %s", dir_path)
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
                    MarkdownDirectory.ImageFileEntry(
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
                    MarkdownDirectory.MetadataFileEntry(
                        format=splitext(file_name)[1][1:].lower(),
                        model_id=model_id,
                        model_type=model_type,
                        source=metadata_file.read(),
                    )
                )

    return {
        "markdown_directory": MarkdownDirectory(
            image_file_entries=tuple(image_file_entries),
            metadata_file_entries=tuple(metadata_file_entries),
            name=str(root_dir_path.name),
        )
    }
