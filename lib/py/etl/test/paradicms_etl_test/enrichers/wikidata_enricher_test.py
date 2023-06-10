from pathlib import Path

from rdflib import URIRef

from paradicms_etl.enrichers.wikidata_enricher import WikidataEnricher
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.person import Person
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.wikibase.wikibase_item import WikibaseItem


def test_enrich(data_dir_path: Path, synthetic_data_models):
    person = next(model for model in synthetic_data_models if isinstance(model, Person))
    enriched_models = tuple(
        WikidataEnricher(
            cache_dir_path=data_dir_path / "synthetic" / ".cache" / "wikidata"
        )((person,))
    )
    assert len(enriched_models) == 5
    assert any(
        isinstance(model, Person) and model.uri == person.uri
        for model in enriched_models
    )
    assert any(isinstance(model, License) for model in enriched_models)
    assert any(isinstance(model, RightsStatement) for model in enriched_models)
    wikidata_entity_uri = URIRef("http://www.wikidata.org/entity/Q7251")
    assert any(
        isinstance(model, WikibaseItem) and model.uri == wikidata_entity_uri
        for model in enriched_models
    )
    assert any(
        isinstance(model, Image) and model.depicts_uri == wikidata_entity_uri
        for model in enriched_models
    )
