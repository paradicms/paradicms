from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.image import Image
from paradicms_etl.models.person import Person
from paradicms_etl.models.work import Work
from paradicms_etl.transformers.markdown_directory_transformer import (
    MarkdownDirectoryTransformer,
)
from ..extractors.markdown_directory_extractor_test import (
    TEST_MARKDOWN_DIRECTORY_EXTRACTOR,
)


def test_transform():
    models = tuple(
        MarkdownDirectoryTransformer(
            collection_uri="urn:markdown:test:collection:default",
            institution_name="Markdown directory test institution",
            collection_title="Markdown directory test collection",
            institution_uri="urn:markdown:test:institution:default",
            pipeline_id="test",
        ).transform(**TEST_MARKDOWN_DIRECTORY_EXTRACTOR.extract())
    )
    assert models
    for model in models:
        assert isinstance(model, _NamedModel), type(model)

    works = [model for model in models if isinstance(model, Work)]
    assert len(works) == 2
    work = next(filter(lambda work: work.title == "Test work 1", works), None)
    assert work

    images = [model for model in models if isinstance(model, Image)]
    assert len(images) == 1
    image = images[0]
    assert image.depicts_uri == work.uri

    people = [model for model in models if isinstance(model, Person)]
    assert len(people) == 1
    person = people[0]
    assert person.name == "Test person"
