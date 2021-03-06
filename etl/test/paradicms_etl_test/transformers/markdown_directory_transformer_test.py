from rdflib import URIRef

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.image import Image
from paradicms_etl.models.person import Person
from paradicms_etl.models.text import Text
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
        assert isinstance(model, NamedModel), type(model)

    collections = {
        model.uri: model for model in models if isinstance(model, Collection)
    }
    assert len(collections) == 1
    collection = tuple(collections.values())[0]
    assert collection.title == "Override default collection title"

    works = {model.uri: model for model in models if isinstance(model, Work)}
    assert len(works) == 2
    work1 = works[URIRef("urn:markdown:test:work:test_work1")]
    work2 = works[URIRef("urn:markdown:test:work:test_work2")]

    work1_abstract = work1.abstract
    assert work1_abstract is not None
    assert isinstance(work1_abstract, Text)
    work1_abstract_rights = work1_abstract.rights
    assert work1_abstract_rights is not None
    assert work1_abstract_rights.holders == ("Abstract rights holder",)

    images = {model.uri: model for model in models if isinstance(model, Image)}
    assert len(images) == 2
    assert images[URIRef("urn:markdown:test:image:test_work1")].depicts_uri == work1.uri
    assert images[URIRef("urn:markdown:test:image:test_work2")].depicts_uri == work2.uri
    assert images[URIRef("urn:markdown:test:image:test_work2")].src

    people = [model for model in models if isinstance(model, Person)]
    assert len(people) == 1
    person = people[0]
    assert person.name == "Test person"
