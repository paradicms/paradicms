import os
from pathlib import Path

from paradicms_etl._extractor import _Extractor


class MarkdownDirectoryExtractor(_Extractor):
    """
    Extract entries from a directory with the structure:
    object/id1.md
    object/id2.md
    person/id1.md
    person/id2.md
    other/id.md

    Returns a dict of {"markdown": {"person": {"id1": contents, "id2": contents}, "object": {"id1", contents, "id2": contents}, "other": {"id": contents}}}
    """

    def extract(self):
        result = {}
        root_dir_path = self._extracted_data_dir_path.absolute()
        for dir_path, _, file_names in os.walk(root_dir_path):
            dir_path = Path(dir_path)
            dir_relpath = dir_path.relative_to(root_dir_path)
            type_ = str(dir_relpath).replace(os.path.sep, "/")
            for file_name in file_names:
                file_name = Path(file_name)
                if file_name.suffix != ".md":
                    continue
                file_path = dir_path / file_name
                with open(file_path) as md_file:
                    md_file_contents = md_file.read()
                result.setdefault(type_, {})[str(file_name.stem)] = md_file_contents
        return {"markdown": result}
