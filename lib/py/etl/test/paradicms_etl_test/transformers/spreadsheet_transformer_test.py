import os
from pathlib import Path
from typing import Tuple

import pytest

from paradicms_etl.extractors.excel_2010_extractor import Excel2010Extractor
from paradicms_etl.extractors.google_sheets_extractor import GoogleSheetsExtractor
from paradicms_etl.model import Model
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.person import Person
from paradicms_etl.models.work import Work
from paradicms_etl.transformers.spreadsheet_transformer import SpreadsheetTransformer


def __check_test_data_models(models: Tuple[Model, ...]):
    assert len(models) == 3

    person = next(person for person in models if isinstance(person, Person))
    assert person.label == "Minor Gordon"

    image = next(image for image in models if isinstance(image, Image))
    assert isinstance(image.src, ImageData)

    work = next(work for work in models if isinstance(work, Work))
    assert work.image_uris == (image.uri,)


def test_transform_excel_2010(excel_2010_test_data_file_path: Path):
    __check_test_data_models(
        tuple(
            SpreadsheetTransformer(pipeline_id="test")(
                **Excel2010Extractor(xlsx_file_path=excel_2010_test_data_file_path)(
                    force=False
                )
            )
        )
    )


@pytest.mark.skipif("CI" in os.environ, reason="don't connect to Google Sheets in CI")
def test_transform_google_sheets(google_sheets_spreadsheet_id: str, tmp_path: Path):
    __check_test_data_models(
        tuple(
            SpreadsheetTransformer(pipeline_id="test")(
                **GoogleSheetsExtractor(
                    cache_dir_path=tmp_path,
                    spreadsheet_id=google_sheets_spreadsheet_id,
                )(force=True)
            )
        )
    )


# @pytest.mark.skipif("CI" in os.environ, reason="don't connect to Google Sheets in CI")
# def test_transform_google_sheets_dressdiscover_exhibitions(tmp_path: Path):
#     models = tuple(
#         SpreadsheetTransformer(pipeline_id="test")(
#             **GoogleSheetsExtractor(
#                 cache_dir_path=tmp_path,
#                 spreadsheet_id="1j2oaMvMxY4pnXO-sEH_fky2R2gm6TQeIev_Q8rVOD4M",
#             )(force=False)
#         )
#     )
#     assert models
