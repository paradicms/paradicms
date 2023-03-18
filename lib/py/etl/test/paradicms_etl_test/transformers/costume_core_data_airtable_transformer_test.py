from pathlib import Path

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.named_value import NamedValue
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.work import Work
from rdflib import URIRef

from dressdiscover_etl.extractors.costume_core_data_airtable_extractor import (
    CostumeCoreDataAirtableExtractor,
)
from dressdiscover_etl.transformers.costume_core_data_airtable_transformer import (
    CostumeCoreDataAirtableTransformer,
)


def test_transform(data_dir_path: Path):
    base_id = "appgU92SdGTwPIVNg"

    extractor = CostumeCoreDataAirtableExtractor(
        access_token="willneverbeused",
        base_id=base_id,
        extracted_data_dir_path=data_dir_path / "costume_core_template" / "extracted",
    )
    extract_result = extractor(force=False)

    institution = Institution.from_fields(
        name="Costume Core Template",
        rights=Rights.from_fields(
            holder="Copyright Arden Kirkland. All rights reserved."
        ),
        uri=URIRef("http://www.ardenkirkland.com/costumecore/"),
    )
    transformer = CostumeCoreDataAirtableTransformer(
        base_id=base_id,
        collection=Collection.from_fields(
            institution_uri=institution.uri,
            title="Costume Core Template Airtable",
            uri=URIRef("https://airtable.com/" + base_id),
        ),
        institution=institution,
    )

    models = tuple(transformer(**extract_result))
    assert models
    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 5
    assert Collection in model_types
    assert Image in model_types
    assert Institution in model_types
    assert NamedValue in model_types
    assert Work in model_types
