from typing import Tuple

import pytest

from paradicms_etl._model import _Model
from paradicms_etl.models.image import Image
from paradicms_etl.pipelines.test_data_pipeline import TestDataPipeline


@pytest.fixture
def test_data_models() -> Tuple[_Model, ...]:
    return tuple(TestDataPipeline().extract_transform())


@pytest.fixture
def test_data_images(test_data_models: Tuple[_Model, ...]) -> Tuple[Image, ...]:
    return tuple(model if isinstance(model, Image) for model in test_data_models)


@pytest.fixture
def test_data_original_images(test_data_images: Tuple[Image, ...]) -> Tuple[Image, ...]:
    return tuple(image if image.original_image_uri is None for image in test_data_images)
