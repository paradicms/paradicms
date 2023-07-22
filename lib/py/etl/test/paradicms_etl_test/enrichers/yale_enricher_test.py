from pathlib import Path

from rdflib import URIRef

from paradicms_etl.enrichers.yale_enricher import YaleEnricher
from paradicms_etl.models.image import Image
from paradicms_etl.models.stub.stub_work import StubWork
from paradicms_etl.models.work import Work


def test_enrich_stub_work(data_dir_path: Path):
    stub_work = StubWork(
        URIRef(
            "https://lux.collections.yale.edu/data/object/25a33e3e-5ac3-4154-9d01-2cbbf87713ed"
        )
    )
    enriched_models = tuple(
        YaleEnricher(cache_dir_path=data_dir_path / "synthetic" / ".cache" / "yale")(
            (stub_work,)
        )
    )
    assert len(enriched_models) == 6  # Enricher should eat the stub
    images = tuple(model for model in enriched_models if isinstance(model, Image))
    assert len(images) == 5
    for image in images:
        assert image.rights_holders
        assert image.rights_statements
    assert any(
        isinstance(model, Work)
        for model in enriched_models
        if model.uri == stub_work.uri
    )
