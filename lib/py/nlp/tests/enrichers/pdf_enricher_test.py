from pathlib import Path
from typing import Tuple

from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from rdflib import SDO, Graph

from paradicms_nlp.enrichers.pdf_enricher import PdfEnricher


def test_enrich(
    cache_dir_path: Path,
    towndex_test_document_pdf_works: Tuple[SchemaCreativeWork, ...],
) -> None:
    for work in towndex_test_document_pdf_works:
        assert not work.creators
        assert not work.text

    sut = PdfEnricher(cache_dir_path=cache_dir_path / "pdfenricher")

    enriched_models = tuple(sut(towndex_test_document_pdf_works))
    assert len(enriched_models) == len(towndex_test_document_pdf_works)
    for enriched_work in enriched_models:
        assert isinstance(enriched_work, SchemaCreativeWork)
        assert enriched_work.text
        assert enriched_work.to_rdf(graph=Graph()).value(SDO.dateCreated) is not None
