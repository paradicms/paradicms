from typing import Tuple

import pytest

from paradicms_etl._model import _Model
from paradicms_etl.models.work import Work
from paradicms_etl.pipelines.test_data_pipeline import TestDataPipeline


@pytest.fixture
def test_data_models() -> Tuple[_Model, ...]:
    return tuple(TestDataPipeline().extract_transform())


@pytest.fixture
def test_data_works(test_data_models: Tuple[_Model, ...]) -> Tuple[Work, ...]:
    return tuple(work for work in test_data_models if isinstance(work, Work))
