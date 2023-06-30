from pathlib import Path

from paradicms_etl.models.dc.dc_physical_object import DcPhysicalObject

from paradicms_etl.extractors.costume_core_data_airtable_extractor import (
    CostumeCoreDataAirtableExtractor,
)
from paradicms_etl.models.dc.dc_collection import DcCollection
from paradicms_etl.models.dc.dc_image import DcImage
from paradicms_etl.models.rdf.rdf_property import RdfProperty
from paradicms_etl.models.skos.skos_concept import SkosConcept
from paradicms_etl.transformers.costume_core_data_airtable_transformer import (
    CostumeCoreDataAirtableTransformer,
)


def test_transform(data_dir_path: Path):
    extractor = CostumeCoreDataAirtableExtractor(
        access_token="willneverbeused",
        base_id="appgU92SdGTwPIVNg",
        cache_dir_path=data_dir_path / "costume_core_template" / "cache" / "airtable",
    )
    extract_result = extractor(force=False)

    transformer = CostumeCoreDataAirtableTransformer()

    models = tuple(transformer(**extract_result))
    assert models
    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 5
    assert DcCollection in model_types
    assert SkosConcept in model_types
    assert DcImage in model_types
    assert RdfProperty in model_types
    assert DcPhysicalObject in model_types
