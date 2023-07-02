from pathlib import Path
from typing import Tuple

import pytest

from paradicms_etl.loaders.nop_loader import nop_loader
from paradicms_etl.model import Model
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
def google_sheets_spreadsheet_id() -> str:
    return "1SZND0zvmtxJEMhTkcMTAUzHiTicYY9wPloDZLWDtXZw"


@pytest.fixture
def synthetic_data_models() -> Tuple[Model, ...]:
    return tuple(SyntheticDataPipeline(loader=nop_loader)())


@pytest.fixture
def synthetic_data_rdf_file_path(data_dir_path: Path) -> Path:
    return data_dir_path / "synthetic" / "synthetic_data.trig"


@pytest.fixture
def test_image_file_path(data_dir_path: Path) -> Path:
    return (
        data_dir_path / "test" / "directory" / "schema-image-object" / "test_work2.gif"
    )
