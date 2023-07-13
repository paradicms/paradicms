from pathlib import Path

from rdflib import URIRef

from paradicms_etl.enrichers.getty_enricher import GettyEnricher
from paradicms_etl.models.license import License
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.stub.stub_work import StubWork


def test_enrich_stub_work(data_dir_path: Path):
    stub_work = StubWork(
        URIRef(
            "https://data.getty.edu/museum/collection/object/4d302ecd-f3a5-4e52-9e97-ca3ca8d5c9e6"
        )
    )
    enriched_models = tuple(
        GettyEnricher(cache_dir_path=data_dir_path / "synthetic" / ".cache" / "getty")(
            (stub_work,)
        )
    )
    assert len(enriched_models) == 4  # Enricher should eat the stub
    assert any(isinstance(model, License) for model in enriched_models)
    assert any(isinstance(model, RightsStatement) for model in enriched_models)
    # assert any(
    #     isinstance(model, WikibaseItem) and model.uri == wikidata_entity_uri
    #     for model in enriched_models
    # )
    # assert any(
    #     isinstance(model, Image)
    #     and model.uri
    #     == URIRef(
    #         "http://commons.wikimedia.org/wiki/Special:FilePath/Alan%20Turing%20Aged%2016.jpg"
    #     )
    #     for model in enriched_models
    # )
