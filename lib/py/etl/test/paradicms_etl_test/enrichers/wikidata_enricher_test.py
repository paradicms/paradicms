from pathlib import Path

from rdflib import URIRef

from paradicms_etl.enrichers.wikidata_enricher import WikidataEnricher
from paradicms_etl.models.person import Person
from paradicms_etl.models.wikidata.wikidata_item import WikidataItem


def test_enrich(synthetic_data_models, tmp_path: Path):
    person = next(model for model in synthetic_data_models if isinstance(model, Person))
    enriched_models = tuple(WikidataEnricher(cache_dir_path=tmp_path)((person,)))
    assert len(enriched_models) == 2
    assert any(
        isinstance(model, Person) and model.uri == person.uri
        for model in enriched_models
    )
    assert any(
        isinstance(model, WikidataItem)
        and model.uri == URIRef("http://www.wikidata.org/entity/Q7251")
        for model in enriched_models
    )
