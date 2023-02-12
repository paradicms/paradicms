from pathlib import Path

from paradicms_etl.extractors.markdown_directory_extractor import (
    markdown_directory_extractor,
)
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.markdown_directory_transformer import (
    MarkdownDirectoryTransformer,
)


class __MarkdownDirectoryPipeline(Pipeline):
    ID = "markdown_directory"

    def __init__(self, data_dir_path: Path):
        Pipeline.__init__(
            self,
            data_dir_path=data_dir_path,
            extractor=markdown_directory_extractor,
            id=self.ID,
            transformer=MarkdownDirectoryTransformer(),
            loader=RdfFileLoader(),
            validate_transform=False,
        )


def test_extract_transform_load(data_dir_path: Path):
    data_file_path = (
        data_dir_path
        / __MarkdownDirectoryPipeline.ID
        / "loaded"
        / "markdown_directory.trig"
    )
    data_file_path.unlink(missing_ok=True)

    __MarkdownDirectoryPipeline(data_dir_path=data_dir_path).extract_transform_load(
        force_extract=False
    )

    assert data_file_path.is_file(), data_file_path
