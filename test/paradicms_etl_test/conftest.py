from typing import Tuple

import pytest

from paradicms_etl._model import _Model
from paradicms_etl.pipelines.test_data_pipeline import TestDataPipeline


@pytest.fixture
def test_data_models() -> Tuple[_Model, ...]:
    return tuple(TestDataPipeline().extract_transform())
