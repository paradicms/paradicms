from pathlib import Path
from typing import Tuple

import pytest

from paradicms_etl.model import Model
from paradicms_etl.models.image import Image
from paradicms_etl.pipelines.synthetic_data_pipeline import SyntheticDataPipeline


@pytest.fixture
def data_dir_path() -> Path:
    path_ = Path(__file__).absolute().parent.parent.parent.parent.parent.parent / "data"
    assert path_.is_dir()
    return path_


@pytest.fixture
def excel_2010_test_data_file_path(data_dir_path: Path) -> Path:
    return data_dir_path / "test" / "excel_2010" / "excel_2010_test_data.xlsx"


@pytest.fixture
def synthetic_data_models() -> Tuple[Model, ...]:
    return tuple(SyntheticDataPipeline().extract_transform())


@pytest.fixture
def synthetic_data_images(
    synthetic_data_models: Tuple[Model, ...]
) -> Tuple[Image, ...]:
    return tuple(model for model in synthetic_data_models if isinstance(model, Image))


@pytest.fixture
def synthetic_data_original_images(
    synthetic_data_images: Tuple[Image, ...]
) -> Tuple[Image, ...]:
    return tuple(
        image for image in synthetic_data_images if image.original_image_uri is None
    )
