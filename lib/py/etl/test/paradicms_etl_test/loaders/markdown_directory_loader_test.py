from pathlib import Path

from pathvalidate import sanitize_filename

from paradicms_etl.extractors.markdown_directory_extractor import (
    MarkdownDirectoryExtractor,
)
from paradicms_etl.loaders.markdown_directory_loader import MarkdownDirectoryLoader
from paradicms_etl.loaders.nop_loader import nop_loader
from paradicms_etl.models.work import Work
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.markdown_directory_transformer import (
    MarkdownDirectoryTransformer,
)


class __MarkdownDirectoryPipeline(Pipeline):
    def __init__(self, data_dir_path: Path, id: str):
        Pipeline.__init__(
            self,
            data_dir_path=data_dir_path,
            extractor=MarkdownDirectoryExtractor(),
            id=id,
            transformer=MarkdownDirectoryTransformer(),
            loader=nop_loader,
        )


def test_load(test_data_models, tmpdir):
    data_dir_path = Path(tmpdir)
    pipeline_id = "test"
    loaded_data_dir_path = data_dir_path / pipeline_id / "loaded"

    MarkdownDirectoryLoader()(
        flush=True,
        loaded_data_dir_path=loaded_data_dir_path,
        models=test_data_models,
        pipeline_id=pipeline_id,
    )

    expected_work = next(work for work in test_data_models if isinstance(work, Work))
    assert expected_work is not None

    expected_md_file_path = (
        loaded_data_dir_path / "work" / (sanitize_filename(expected_work.title) + ".md")
    )
    assert expected_md_file_path.exists()

    loaded_data_dir_path.rename(data_dir_path / pipeline_id / "extracted")

    actual_models = tuple(
        __MarkdownDirectoryPipeline(
            data_dir_path=data_dir_path, id=pipeline_id
        ).extract_transform()
    )
    actual_work = next(
        work
        for work in actual_models
        if isinstance(work, Work) and work.title == expected_work.title
    )
    assert actual_work.uri == expected_work.uri
