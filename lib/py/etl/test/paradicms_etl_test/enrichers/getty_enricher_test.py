from pathlib import Path

from rdflib import URIRef

from paradicms_etl.enrichers.getty_enricher import GettyEnricher
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.rights_statement import RightsStatement
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
    assert len(enriched_models) == 4  # Enricher should eat the stub
    assert any(
        isinstance(model, Image)
        for model in enriched_models
        if model.uri
        == URIRef(
            "https://media.getty.edu/iiif/image/fcbc34dd-cd8a-4a5b-8fd6-cd769588b9a8/full/full/0/default.jpg"
        )
    )
    assert any(
        isinstance(model, License)
        for model in enriched_models
        if model.uri == URIRef("http://creativecommons.org/licenses/by/4.0/")
    )
    assert any(
        isinstance(model, RightsStatement)
        for model in enriched_models
        if model.uri == URIRef("https://rightsstatements.org/vocab/NoC-US/1.0/")
    )
    assert any(
        isinstance(model, Work)
        for model in enriched_models
        if model.uri == stub_work.uri
    )
