from pathlib import Path
from typing import Tuple

from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.work import Work

from paradicms_nlp.enrichers.pdf_enricher import PdfEnricher
from paradicms_nlp.enrichers.text_enricher import TextEnricher


def test_enrich(
    cache_dir_path: Path,
    pdf_works: Tuple[SchemaCreativeWork, ...],
) -> None:
    pdf_works = tuple(
        PdfEnricher(cache_dir_path=cache_dir_path / "pdfenricher")(pdf_works)
    )

    enriched_models = tuple(TextEnricher(cache_dir_path=cache_dir_path)(pdf_works))
    enriched_works = tuple(
        enriched_model
        for enriched_model in enriched_models
        if isinstance(enriched_model, Work)
    )
    assert len(enriched_works) == len(pdf_works)
    organizations = tuple(
        enriched_model
        for enriched_model in enriched_models
        if isinstance(enriched_model, Organization)
    )
    assert organizations
    people = tuple(
        enriched_model
        for enriched_model in enriched_models
        if isinstance(enriched_model, Person)
    )
    assert people
