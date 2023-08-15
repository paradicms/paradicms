from pathlib import Path

from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from rdflib import SDO, Graph

from paradicms_nlp.enrichers.pdf_enricher import PdfEnricher


def test_enrich(
    cache_dir_path: Path, towndex_test_document_1_pdf_work: SchemaCreativeWork
) -> None:
    sut = PdfEnricher(cache_dir_path=cache_dir_path / "pdfenricher")
    assert not towndex_test_document_1_pdf_work.text
    assert not towndex_test_document_1_pdf_work.creators

    enriched_models = tuple(sut((towndex_test_document_1_pdf_work,)))
    assert len(enriched_models) == 1
    enriched_work = enriched_models[0]
    assert isinstance(enriched_work, SchemaCreativeWork)
    assert enriched_work.text
    assert enriched_work.to_rdf(graph=Graph()).value(SDO.dateCreated) is not None
