import os

import pytest

from paradicms_etl.extractors.wikidata_qid_extractor import WikidataQidExtractor
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.license import License
from paradicms_etl.models.person import Person
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.work import Work
from paradicms_etl.transformers.wikidata_items_transformer import (
    WikidataItemsTransformer,
)


@pytest.mark.skipif("CI" in os.environ, reason="don't connect to Wikidata in CI")
def test_transform(tmp_path):
    graph = WikidataQidExtractor(
        extracted_data_dir_path=tmp_path,
        qids=(
            "Q160534",
            "Q698487",
        ),
    )(force=False)[
        "graph"
    ]  # Jack Kerouac, The Kiss - Gustav Klimt

    sut = WikidataItemsTransformer()
    models = tuple(sut(graph=graph))
    assert len(models) == 8

    collections = tuple(
        collection for collection in models if isinstance(collection, Collection)
    )
    assert len(collections) == 1

    institutions = tuple(
        institution for institution in models if isinstance(institution, Institution)
    )
    assert len(institutions) == 1

    licenses = tuple(license for license in models if isinstance(license, License))
    assert len(licenses) == 1

    rights_statements = tuple(
        rights_statement
        for rights_statement in models
        if isinstance(rights_statement, RightsStatement)
    )
    assert len(rights_statements) == 1

    people = tuple(person for person in models if isinstance(person, Person))
    assert len(people) == 1
    person = people[0]
    assert person.name == "Jack Kerouac"

    works = tuple(work for work in models if isinstance(work, Work))
    assert len(works) == 1
    work = works[0]
    assert work.title == "The Kiss"

    images = tuple(image for image in models if isinstance(image, Image))
    assert len(images) == 2
    assert any(image for image in images if image.depicts_uri == work.uri)
    assert any(image for image in images if image.depicts_uri == person.uri)
