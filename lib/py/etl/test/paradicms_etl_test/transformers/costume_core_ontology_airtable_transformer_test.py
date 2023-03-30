from pathlib import Path

from paradicms_etl.extractors.costume_core_ontology_airtable_extractor import (
    CostumeCoreOntologyAirtableExtractor,
)
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_group import PropertyGroup
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.work import Work
from paradicms_etl.transformers.costume_core_ontology_airtable_transformer import (
    CostumeCoreOntologyAirtableTransformer,
)


def test_transform(data_dir_path: Path):
    extractor = CostumeCoreOntologyAirtableExtractor(
        access_token="willneverbeused",
        extracted_data_dir_path=data_dir_path / "costume_core_ontology" / "extracted",
    )
    extract_result = extractor(force=False)

    transformer = CostumeCoreOntologyAirtableTransformer()

    models = tuple(transformer(**extract_result))
    assert models
    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 11, model_types
    assert Image in model_types
    assert Collection in model_types
    assert Concept in model_types
    assert CostumeCoreOntology in model_types
    assert CostumeCoreOntology.Predicate in model_types
    assert CostumeCoreOntology.Term in model_types
    assert License in model_types
    assert Property in model_types
    assert PropertyGroup in model_types
    assert RightsStatement in model_types
    assert Work in model_types
