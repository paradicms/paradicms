from pathlib import Path

from rdflib import URIRef

from paradicms_etl.extractors.directory_extractor import (
    DirectoryExtractor,
)
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.person import Person
from paradicms_etl.models.text import Text
from paradicms_etl.models.work import Work
from paradicms_etl.transformers.directory_transformer import (
    DirectoryTransformer,
)


def test_transform(data_dir_path: Path):
    directory_data_dir_path = data_dir_path / "test" / "directory"
    extractor = DirectoryExtractor(directory_path=directory_data_dir_path)
    models = tuple(
        DirectoryTransformer(
            # collection_uri="urn:directory:test:collection:default",
            # collection_title="Markdown directory test collection",
            pipeline_id="test"
        )(**extractor())
    )
    assert models

    collections = {
        model.uri: model for model in models if isinstance(model, Collection)
    }
    assert len(collections) == 1
    collection = tuple(collections.values())[0]
    assert collection.title == "Override default collection title"

    works = {model.uri: model for model in models if isinstance(model, Work)}
    assert len(works) == 2
    work1 = works[URIRef("urn:directory:test:cms-work:test_work1")]
    work2 = works[URIRef("urn:directory:test:cms-work:test_work2")]

    work1_description = work1.description
    assert work1_description is not None
    assert isinstance(work1_description, Text)
    assert work1_description.rights_holders == (
        URIRef("urn:directory:test:cms-person:test_person"),
    )

    images = {model.uri: model for model in models if isinstance(model, Image)}
    assert len(images) == 2
    assert (
        images[URIRef("urn:directory:test:cms-image:test_work1")].depicts_uri
        == work1.uri
    )
    assert (
        images[URIRef("urn:directory:test:cms-image:test_work2")].depicts_uri
        == work2.uri
    )
    assert images[URIRef("urn:directory:test:cms-image:test_work2")].src

    people = [model for model in models if isinstance(model, Person)]
    assert len(people) == 1
    person = people[0]
    assert person.name == "Test person"
