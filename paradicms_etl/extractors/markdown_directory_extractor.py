import os
from pathlib import Path

from PIL import Image, UnidentifiedImageError

from paradicms_etl.extractor import Extractor
from paradicms_etl.models.markdown_directory import MarkdownDirectory


class MarkdownDirectoryExtractor(Extractor):
    """
    Extract entries from a directory with the structure:
    work/id1.md
    work/id2.md
    person/id1.md
    person/id2.md
    other/id.md

    into a MarkdownDirectory dataclass.
    """

    def extract(self, **kwds):
        image_file_entries = []
        markdown_file_entries = []
        root_dir_path = self._extracted_data_dir_path.absolute()
        for dir_path, _, file_names in os.walk(root_dir_path):
            dir_path = Path(dir_path)
            dir_relpath = dir_path.relative_to(root_dir_path)
            model_type = str(dir_relpath).replace(os.path.sep, "/")
            for file_name in file_names:
                file_name = Path(file_name)
                file_path = dir_path / file_name
                model_id = str(file_name.stem)

                if file_name.suffix == ".md":
                    with open(file_path) as md_file:
                        markdown_source = md_file.read()
                    markdown_file_entries.append(
                        MarkdownDirectory.MarkdownFileEntry(
                            markdown_source=markdown_source,
                            model_id=model_id,
                            model_type=model_type,
                        )
                    )
                    continue

                try:
                    with Image.open(str(file_path)) as image:
                        image_format = image.format
                except UnidentifiedImageError:
                    self._logger.warning(
                        "non-Markdown, non-image file in Markdown directory: %s",
                        file_path,
                    )
                    continue

                image_file_entries.append(
                    MarkdownDirectory.ImageFileEntry(
                        mime_type="image/" + image_format.lower(),
                        model_id=model_id,
                        model_type=model_type,
                        path=file_path,
                    )
                )
        return {
            "markdown_directory": MarkdownDirectory(
                image_file_entries=tuple(image_file_entries),
                markdown_file_entries=tuple(markdown_file_entries),
                name=str(root_dir_path.name),
            )
        }
