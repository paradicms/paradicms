from pathlib import Path

from rdflib import URIRef

from paradicms_etl.extractors.markdown_directory_extractor import (
    MarkdownDirectoryExtractor,
)
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.person import Person
from paradicms_etl.models.text import Text
from paradicms_etl.models.work import Work
from paradicms_etl.transformers.markdown_directory_transformer import (
    MarkdownDirectoryTransformer,
)


def test_transform(data_dir_path: Path):
    markdown_directory_data_dir_path = data_dir_path / "test" / "markdown_directory"
    extractor = MarkdownDirectoryExtractor(
        markdown_directory_path=markdown_directory_data_dir_path / "extracted"
    )
    models = tuple(
        MarkdownDirectoryTransformer(
            # collection_uri="urn:markdown:test:collection:default",
            # collection_title="Markdown directory test collection",
            pipeline_id="test"
        )(**extractor())
    )
    assert models
    for model in models:
        assert isinstance(model, NamedModel), type(model)

    collections = {
        model.uri: model for model in models if isinstance(model, Collection)
    }
    assert len(collections) == 1
    collection = tuple(collections.values())[0]
    assert collection.title == "Override default collection title"

    works = {model.uri: model for model in models if isinstance(model, Work)}
    assert len(works) == 2
    work1 = works[URIRef("urn:markdown:test:cms-work:test_work1")]
    work2 = works[URIRef("urn:markdown:test:cms-work:test_work2")]

    work1_description = work1.description
    assert work1_description is not None
    assert isinstance(work1_description, Text)
    assert work1_description.holders == (
        URIRef("urn:markdown:test:cms-person:test_person"),
    )

    images = {model.uri: model for model in models if isinstance(model, Image)}
    assert len(images) == 2
    assert (
        images[URIRef("urn:markdown:test:cms-image:test_work1")].depicts_uri
        == work1.uri
    )
    assert (
        images[URIRef("urn:markdown:test:cms-image:test_work2")].depicts_uri
        == work2.uri
    )
    assert images[URIRef("urn:markdown:test:cms-image:test_work2")].src

    people = [model for model in models if isinstance(model, Person)]
    assert len(people) == 1
    person = people[0]
    assert person.name == "Test person"
