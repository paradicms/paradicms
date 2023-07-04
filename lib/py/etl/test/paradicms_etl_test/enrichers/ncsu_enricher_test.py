from pathlib import Path

from rdflib import URIRef

from paradicms_etl.enrichers.ncsu_enricher import NcsuEnricher
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.stub.stub_work import StubWork
from paradicms_etl.models.work import Work


def test_enrich_stub_work(data_dir_path: Path):
    stub_work = StubWork(URIRef("https://d.lib.ncsu.edu/collections/catalog/0002030"))
    enriched_models = tuple(
        NcsuEnricher(cache_dir_path=data_dir_path / "synthetic" / ".cache" / "ncsu")(
            (stub_work,)
        )
    )
    assert len(enriched_models) == 1
    ncsu_work = enriched_models[0]
    assert isinstance(ncsu_work, SchemaCreativeWork)
    assert ncsu_work.uri == stub_work.uri


def test_enrich_synthetic_work(data_dir_path: Path, synthetic_data_models):
    work_uri = URIRef("http://example.com/collection0/work1")
    work = next(
        model
        for model in synthetic_data_models
        if isinstance(model, Work) and model.uri == work_uri
    )
    enriched_models = tuple(
        NcsuEnricher(cache_dir_path=data_dir_path / "synthetic" / ".cache" / "ncsu")(
            (work,)
        )
    )
    assert len(enriched_models) == 2
    ncsu_work = next(
        enriched_model
        for enriched_model in enriched_models
        if enriched_model.uri
        == URIRef("https://d.lib.ncsu.edu/collections/catalog/0002030")
    )
    assert isinstance(ncsu_work, SchemaCreativeWork)
