from typing import Tuple

import pytest
from paradicms_etl.model import Model

from paradicms_etl.pipelines.test_data_pipeline import TestDataPipeline


@pytest.fixture
def test_data_models() -> Tuple[Model, ...]:
    return tuple(TestDataPipeline().extract_transform())
