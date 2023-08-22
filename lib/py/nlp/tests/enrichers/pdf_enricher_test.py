from pathlib import Path
from typing import Tuple

from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from rdflib import SDO, Graph

from paradicms_nlp.enrichers.pdf_enricher import PdfEnricher


def test_enrich(
    cache_dir_path: Path,
    pdf_works: Tuple[SchemaCreativeWork, ...],
) -> None:
    for work in pdf_works:
        assert not work.creators
        assert not work.text

    sut = PdfEnricher(cache_dir_path=cache_dir_path / "pdfenricher")

    enriched_models = tuple(sut(pdf_works))
    assert len(enriched_models) == len(pdf_works)
    for enriched_work in enriched_models:
        assert isinstance(enriched_work, SchemaCreativeWork)
        assert enriched_work.text
        assert enriched_work.to_rdf(graph=Graph()).value(SDO.dateCreated) is not None
