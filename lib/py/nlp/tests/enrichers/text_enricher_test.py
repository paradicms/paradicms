from pathlib import Path
from typing import Tuple

from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork

from paradicms_nlp.enrichers.pdf_enricher import PdfEnricher
from paradicms_nlp.enrichers.text_enricher import TextEnricher


def test_enrich(
    cache_dir_path: Path,
    towndex_test_document_pdf_works: Tuple[SchemaCreativeWork, ...],
) -> None:
    pdf_works = tuple(
        PdfEnricher(cache_dir_path=cache_dir_path / "pdfenricher")(
            towndex_test_document_pdf_works
        )
    )

    enriched_models = tuple(TextEnricher()(pdf_works))
    assert len(enriched_models) == len(pdf_works)
