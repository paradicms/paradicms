from typing import Tuple

import pytest

from paradicms_etl.model import Model
from paradicms_etl.models.image import Image
from paradicms_etl.pipelines.test_data_pipeline import TestDataPipeline


@pytest.fixture
def test_data_models() -> Tuple[Model, ...]:
    return tuple(TestDataPipeline().extract_transform())


@pytest.fixture
def test_data_images(test_data_models: Tuple[Model, ...]) -> Tuple[Image, ...]:
    return tuple(model for model in test_data_models if isinstance(model, Image))


@pytest.fixture
def test_data_original_images(test_data_images: Tuple[Image, ...]) -> Tuple[Image, ...]:
    return tuple(
        image for image in test_data_images if image.original_image_uri is None
    )
