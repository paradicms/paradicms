from pathlib import Path

from rdflib import URIRef

from paradicms_etl.extractors.costume_core_data_airtable_extractor import (
    CostumeCoreDataAirtableExtractor,
)
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.image import Image
from paradicms_etl.models.work import Work
from paradicms_etl.transformers.costume_core_data_airtable_transformer import (
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

    transformer = CostumeCoreDataAirtableTransformer(
        base_id=base_id,
        collection=Collection.from_fields(
            title="Costume Core Template Airtable",
            uri=URIRef("https://airtable.com/" + base_id),
        ),
    )

    models = tuple(transformer(**extract_result))
    assert models
    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 4
    assert Collection in model_types
    assert Image in model_types
    assert Concept in model_types
    assert Work in model_types
