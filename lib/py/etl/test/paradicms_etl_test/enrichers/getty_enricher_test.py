from pathlib import Path

from rdflib import URIRef

from paradicms_etl.enrichers.getty_enricher import GettyEnricher
from paradicms_etl.models.image import Image
from paradicms_etl.models.stub.stub_work import StubWork
from paradicms_etl.models.work import Work


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
