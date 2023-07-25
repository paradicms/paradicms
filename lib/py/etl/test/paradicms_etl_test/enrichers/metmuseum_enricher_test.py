from pathlib import Path

import pytest
from rdflib import URIRef

from paradicms_etl.enrichers.metmuseum_enricher import MetmuseumEnricher
from paradicms_etl.models.agent import Agent
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.image import Image
from paradicms_etl.models.stub.stub_work import StubWork
from paradicms_etl.models.work import Work


@pytest.mark.parametrize(
    "uri",
    (
        # Vincent Van Gogh - Wheat Field with Cypresses
        URIRef("https://www.metmuseum.org/art/collection/search/436535"),
        # ibid
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
    assert len(enriched_models) == 10  # Enricher should eat the stub

    concepts = tuple(model for model in enriched_models if isinstance(model, Concept))
    assert len(concepts) == 3
    for concept in concepts:
        assert concept.label

    images = tuple(model for model in enriched_models if isinstance(model, Image))
    assert len(images) == 5  # One primary + four additional

    agents = tuple(model for model in enriched_models if isinstance(model, Agent))
    assert len(agents) == 1

    assert any(
        isinstance(model, Work)
        for model in enriched_models
        if model.uri
        == URIRef(
            "https://collectionapi.metmuseum.org/public/collection/v1/objects/436535"
        )
    )
