from pathlib import Path

from paradicms_etl._pipeline import _Pipeline
from paradicms_etl.extractors.markdown_directory_extractor import (
    MarkdownDirectoryExtractor,
)
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.transformers.markdown_directory_transformer import (
    MarkdownDirectoryTransformer,
)


class MarkdownDirectoryPipeline(_Pipeline):
    ID = "markdown_directory"

    def __init__(self, data_dir_path: Path):
        _Pipeline.__init__(
            self,
            extractor=MarkdownDirectoryExtractor(
                data_dir_path=data_dir_path, pipeline_id=self.ID
            ),
            id=self.ID,
            transformer=MarkdownDirectoryTransformer(pipeline_id=self.ID),
            loader=RdfFileLoader(data_dir_path=data_dir_path, pipeline_id=self.ID),
            validate_transform=False,
        )


def test_extract_transform_load():
    data_dir_path = Path(__file__).absolute().parent.parent.parent.parent / "data"
    data_ttl_file_path = (
        data_dir_path
        / MarkdownDirectoryPipeline.ID
        / "loaded"
        / "markdown_directory.ttl"
    )
    data_ttl_file_path.unlink(missing_ok=True)

    MarkdownDirectoryPipeline(data_dir_path=data_dir_path).extract_transform_load(
        force_extract=False
    )

    assert data_ttl_file_path.is_file(), data_ttl_file_path
