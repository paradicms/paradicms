from pathlib import Path

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.work import Work
from paradicms_etl.transformers.costume_core_models_to_paradicms_models_transformer import (
    CostumeCoreModelsToParadicmsModelsTransformer,
)


def test_transform(data_dir_path: Path):
    models = tuple(CostumeCoreModelsToParadicmsModelsTransformer()())
    assert models
    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 5
    assert Collection in model_types
    assert Image in model_types
    assert License in model_types
    assert RightsStatement in model_types
    assert Work in model_types
