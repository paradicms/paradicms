from pathlib import Path

import pytest
from rdflib import URIRef

from paradicms_etl.enrichers.metmuseum_enricher import MetmuseumEnricher
from paradicms_etl.models.image import Image
from paradicms_etl.models.stub.stub_work import StubWork
from paradicms_etl.models.work import Work


@pytest.mark.parametrize(
    "uri",
    (
        URIRef("https://www.metmuseum.org/art/collection/search/436535"),
        URIRef(
            "https://collectionapi.metmuseum.org/public/collection/v1/objects/436535"
        ),
    ),
)
def test_enrich_stub_work(data_dir_path: Path, uri: URIRef):
    stub_work = StubWork(uri)
    enriched_models = tuple(
        MetmuseumEnricher(
            cache_dir_path=data_dir_path / "synthetic" / ".cache" / "metmuseum"
        )((stub_work,))
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
