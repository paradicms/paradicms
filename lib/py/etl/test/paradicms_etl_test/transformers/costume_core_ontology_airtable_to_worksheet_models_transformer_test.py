from pathlib import Path

from paradicms_etl.models.named_value import NamedValue

from paradicms_etl.extractors.costume_core_ontology_airtable_extractor import (
    CostumeCoreOntologyAirtableExtractor,
)
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.worksheet_feature import WorksheetFeature
from paradicms_etl.models.worksheet_feature_set import WorksheetFeatureSet
from paradicms_etl.transformers.costume_core_ontology_airtable_to_worksheet_models_transformer import (
    CostumeCoreOntologyAirtableToWorksheetModelsTransformer,
)


def test_transform(data_dir_path: Path):
    extractor = CostumeCoreOntologyAirtableExtractor(
        access_token="willneverbeused",
        extracted_data_dir_path=data_dir_path / "costume_core_ontology" / "extracted",
    )
    extract_result = extractor(force=False)

    transformer = CostumeCoreOntologyAirtableToWorksheetModelsTransformer()

    models = tuple(transformer(**extract_result))
    assert models
    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 6
    assert Image in model_types
    assert License in model_types
    assert NamedValue in model_types
    assert RightsStatement in model_types
    assert WorksheetFeature in model_types
    assert WorksheetFeatureSet in model_types
