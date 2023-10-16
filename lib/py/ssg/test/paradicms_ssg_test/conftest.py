from pathlib import Path

import pytest
from paradicms_etl.loaders.nop_loader import nop_loader
from paradicms_etl.model import Model
from paradicms_etl.models.image import Image
from paradicms_etl.pipelines.synthetic_data_pipeline import SyntheticDataPipeline


@pytest.fixture(scope="session")
def data_dir_path() -> Path:
    path_ = Path(__file__).absolute().parent.parent.parent.parent.parent.parent / "data"
    assert path_.is_dir()
    return path_


@pytest.fixture(scope="session")
def excel_2010_test_data_file_path(data_dir_path: Path) -> Path:
    return data_dir_path / "test" / "excel_2010" / "excel_2010_test_data.xlsx"


@pytest.fixture(scope="session")
def synthetic_data_models() -> tuple[Model, ...]:
    return tuple(SyntheticDataPipeline(loader=nop_loader)())


@pytest.fixture(scope="session")
def synthetic_data_images(
    synthetic_data_models: tuple[Model, ...]
) -> tuple[Image, ...]:
    return tuple(model for model in synthetic_data_models if isinstance(model, Image))


@pytest.fixture(scope="session")
def synthetic_data_original_images(
    synthetic_data_images: tuple[Image, ...]
) -> tuple[Image, ...]:
    return tuple(image for image in synthetic_data_images if image.thumbnail_uris)


@pytest.fixture(scope="session")
def test_image_file_path(data_dir_path: Path) -> Path:
    return (
        data_dir_path / "test" / "directory" / "schema-image-object" / "test_work2.gif"
    )
