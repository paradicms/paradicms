import os
from pathlib import Path

import pytest
from pathvalidate import sanitize_filename

from
from paradicms_etl.extractors.markdown_directory_extractor import (
    markdown_directory_extractor,
)
from paradicms_etl.loaders.nop_loader import nop_loader
from paradicms_etl.models.image import Image
from paradicms_etl.models.person import Person
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.pipelines.wikidata_qid_to_markdown_directory_pipeline import (
    WikidataQidToMarkdownDirectoryPipeline,
)
from paradicms_etl.transformers.markdown_directory_transformer import (
    MarkdownDirectoryTransformer,
)


class __MarkdownDirectoryPipeline(Pipeline):
    def __init__(self, id: str, markdown_directory_path: Path):
        Pipeline.__init__(
            self,
            extractor=markdown_directory_extractor,
            id=id,
            transformer=MarkdownDirectoryTransformer(),
            loader=nop_loader,
        )


@pytest.mark.skipif("CI" in os.environ, reason="don't connect to Wikidata in CI")
def test_extract_transform_load(tmpdir):
    tmpdir_path = Path(tmpdir)
    pipeline_id = "test"
    data_dir_path = tmpdir_path / "data"
    data_dir_path.mkdir()
    markdown_directory_path = tmpdir_path / "md"
    markdown_directory_path.mkdir()
    pipeline = WikidataQidToMarkdownDirectoryPipeline(
        data_dir_path=data_dir_path,
        markdown_directory_path=markdown_directory_path,
        pipeline_id=pipeline_id,
        qid=["Q160534"],
    )
    pipeline.extract_transform_load()

    expected_md_file_path = (
        markdown_directory_path / "person" / (sanitize_filename("Jack Kerouac") + ".md")
    )
    assert expected_md_file_path.exists()

    actual_models = tuple(
        __MarkdownDirectoryPipeline(
            markdown_directory_path=markdown_directory_path, id=pipeline_id
        ).extract_transform()
    )
    people = tuple(model for model in actual_models if isinstance(model, Person))
    images = tuple(model for model in actual_models if isinstance(model, Image))

    assert len(people) == 1
    person = people[0]
    assert person.name == "Jack Kerouac"

    # assert len(images) == 1
    # image = images[0]
    # assert image.label == "Jack Kerouac"
    # assert image.depicts_uri == person.uri
