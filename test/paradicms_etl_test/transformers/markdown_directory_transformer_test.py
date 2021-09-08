from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.opaque_named_model import OpaqueNamedModel
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
        assert isinstance(model, _NamedModel) or isinstance(
            model, OpaqueNamedModel
        ), type(model)

    # works = [
    #     model
    #     for model in models
    #     if isinstance(model, OpaqueNamedModel) and model.type == CMS.Work
    # ]
    # assert len(works) == 2
    # found_work = False
    # for work in works:
    #     if work.resource.value(DCTERMS.title, Literal("Test work 1")) is not None:
    #         found_work = True
    #         break
    # assert found_work
    #
    # images = [model for model in models if isinstance(model, Image)]
    # assert len(images) == 1
    # image = images[0]
    # assert image.depicts_uri == work_.uri
    #
    # people = [
    #     model
    #     for model in models
    #     if isinstance(model, OpaqueNamedModel) and model.type == CMS.Person
    # ]
    # assert len(people) == 1
    # person = people[0]
    # assert any(
    #     property_.uri == FOAF.name and property_.value == Literal("Test person")
    #     for property_ in person.properties
    # )
