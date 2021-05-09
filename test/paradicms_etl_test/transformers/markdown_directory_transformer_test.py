from rdflib import DCTERMS, FOAF, Literal

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.object import Object
from paradicms_etl.models.opaque_named_model import OpaqueNamedModel
from paradicms_etl.models.person import Person
from paradicms_etl.namespace import CMS
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

    objects = [
        model
        for model in models
        if isinstance(model, OpaqueNamedModel) and model.type == CMS.Object
    ]
    assert len(objects) == 1
    object_ = objects[0]
    assert any(
        property_.uri == DCTERMS.title and property_.value == Literal("Test object")
        for property_ in object_.properties
    )

    people = [
        model
        for model in models
        if isinstance(model, OpaqueNamedModel) and model.type == CMS.Person
    ]
    assert len(people) == 1
    person = people[0]
    assert any(
        property_.uri == FOAF.name and property_.value == Literal("Test person")
        for property_ in person.properties
    )
