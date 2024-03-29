from pathlib import Path

import pytest
from rdflib import URIRef

from paradicms_etl.enrichers.wikidata_enricher import WikidataEnricher
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.person import Person
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.stub.stub_person import StubPerson
from paradicms_etl.models.stub.stub_work import StubWork
from paradicms_etl.models.wikibase.wikibase_item import WikibaseItem
from paradicms_etl.models.wikibase.wikibase_property import WikibaseProperty
from paradicms_etl.models.work import Work
from paradicms_etl.namespaces.wd import WD


@pytest.mark.parametrize(
    "wikidata_uri",
    (
        URIRef("http://www.wikidata.org/entity/Q7251"),
        URIRef("http://www.wikidata.org/wiki/Q7251"),
    ),
)
def test_enrich_stub_person(data_dir_path: Path, wikidata_uri: URIRef):
    person = StubPerson(wikidata_uri)
    enriched_models = tuple(
        WikidataEnricher(
            cache_dir_path=data_dir_path / "synthetic" / ".cache" / "wikidata"
        )((person,))
    )
    assert len(enriched_models) == 211  # WikidataEnricher should eat the stub
    assert any(isinstance(model, License) for model in enriched_models)
    assert any(isinstance(model, RightsStatement) for model in enriched_models)
    wikidata_entity_uri = URIRef("http://www.wikidata.org/entity/Q7251")
    assert any(
        isinstance(model, WikibaseItem) and model.uri == wikidata_entity_uri
        for model in enriched_models
    )
    assert any(
        isinstance(model, Image)
        and model.uri
        == URIRef(
            "http://commons.wikimedia.org/wiki/Special:FilePath/Alan%20Turing%20Aged%2016.jpg"
        )
        for model in enriched_models
    )
    assert (
        len(
            tuple(
                model
                for model in enriched_models
                if isinstance(model, WikibaseProperty)
            )
        )
        == 207
    )


def test_enrich_synthetic_person(data_dir_path: Path, synthetic_data_models):
    wikidata_entity_uri = WD.Q7251
    person = next(
        model
        for model in synthetic_data_models
        if isinstance(model, Person) and wikidata_entity_uri in model.same_as_uris
    )
    enriched_models = tuple(
        WikidataEnricher(
            cache_dir_path=data_dir_path / "synthetic" / ".cache" / "wikidata"
        )((person,))
    )
    assert len(enriched_models) == 212
    # Original Person
    assert any(
        isinstance(model, Person) and model.uri == person.uri
        for model in enriched_models
    )
    # License for any Wikidata data
    assert any(isinstance(model, License) for model in enriched_models)
    # RightsStatement for any Wikidata data
    assert any(isinstance(model, RightsStatement) for model in enriched_models)
    # Wikidata entity that's the sameAs the original Person
    wikidata_entity_uri = URIRef("http://www.wikidata.org/entity/Q7251")
    assert any(
        isinstance(model, WikibaseItem) and model.uri == wikidata_entity_uri
        for model in enriched_models
    )
    # Image associated with the Wikidata entity
    assert any(
        isinstance(model, Image)
        and model.uri
        == URIRef(
            "http://commons.wikimedia.org/wiki/Special:FilePath/Alan%20Turing%20Aged%2016.jpg"
        )
        for model in enriched_models
    )
    assert (
        len(
            tuple(
                model
                for model in enriched_models
                if isinstance(model, WikibaseProperty)
            )
        )
        == 207
    )


def test_enrich_synthetic_work(data_dir_path: Path):
    wikidata_entity_uri = URIRef("http://www.wikidata.org/entity/Q19911452")
    # work = next(
    #     model
    #     for model in synthetic_data_models
    #     if isinstance(model, Work) and wikidata_entity_uri in model.same_as_uris
    # )
    work = StubWork(wikidata_entity_uri)
    enriched_models = tuple(
        WikidataEnricher(
            cache_dir_path=data_dir_path / "synthetic" / ".cache" / "wikidata"
        )((work,))
    )
    assert len(enriched_models) == 307
    # Original work
    # assert any(
    #     isinstance(model, Work) and model.uri == work.uri for model in enriched_models
    # )
    # License for any Wikidata data
    assert any(isinstance(model, License) for model in enriched_models)
    # RightsStatement for any Wikidata data
    assert any(isinstance(model, RightsStatement) for model in enriched_models)
    # Wikidata entity that's the sameAs the original work
    assert any(
        isinstance(model, WikibaseItem) and model.uri == wikidata_entity_uri
        for model in enriched_models
    )
    # Image associated with the sameAs Wikidata entity
    assert any(
        isinstance(model, Image)
        and model.uri
        == URIRef(
            "http://commons.wikimedia.org/wiki/Special:FilePath/Lucas%20Cranach%20d.%C3%84.%20-%20Das%20Urteil%20des%20Paris.jpg"
        )
        for model in enriched_models
    )
    # Image associated with the sameAs Wikidata entity's creator
    assert any(
        isinstance(model, Image)
        and model.uri
        == URIRef(
            "http://commons.wikimedia.org/wiki/Special:FilePath/Lucas%20Cranach%20d.%20%C3%84.%20063.jpg"
        )
        for model in enriched_models
    )
    # Two WikibaseItem locations associated with the sameAs Wikidata entity
    assert any(
        isinstance(model, WikibaseItem)
        and model.uri == URIRef("http://www.wikidata.org/entity/Q82069921")
        for model in enriched_models
    )
    assert any(
        isinstance(model, WikibaseItem)
        and model.uri == URIRef("http://www.wikidata.org/entity/Q89503830")
        for model in enriched_models
    )
    # WikibaseItem that's the subject of the sameAs Wikidata entity
    assert any(
        isinstance(model, WikibaseItem)
        and model.uri == URIRef("http://www.wikidata.org/entity/Q1784308")
        for model in enriched_models
    )
    # WikibaseItem that's the creator of the sameAs Wikidata entity
    assert any(
        isinstance(model, WikibaseItem)
        and model.uri == URIRef("http://www.wikidata.org/entity/Q191748")
        for model in enriched_models
    )
    assert (
        len(
            tuple(
                model
                for model in enriched_models
                if isinstance(model, WikibaseProperty)
            )
        )
        == 298
    )
