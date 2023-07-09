import os
from pathlib import Path
from typing import Tuple

import pytest
from rdflib import URIRef

from paradicms_etl.extractors.excel_2010_extractor import Excel2010Extractor
from paradicms_etl.extractors.google_sheets_extractor import GoogleSheetsExtractor
from paradicms_etl.model import Model
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.person import Person
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson
from paradicms_etl.models.schema.schema_place import SchemaPlace
from paradicms_etl.models.stub.stub_work import StubWork
from paradicms_etl.models.work import Work
from paradicms_etl.transformers.spreadsheet_transformer import SpreadsheetTransformer


def __check_test_data_models(models: Tuple[Model, ...]):
    assert len(models) == 4

    person = next(person for person in models if isinstance(person, Person))
    assert person.label == "Minor Gordon"

    image = next(image for image in models if isinstance(image, Image))
    assert isinstance(image.src, ImageData)

    works = tuple(work for work in models if isinstance(work, Work))
    assert len(works) == 2
    schema_creative_work = next(
        work for work in works if isinstance(work, SchemaCreativeWork)
    )
    assert schema_creative_work.image_uris == (image.uri,)
    stub_work = next(work for work in works if isinstance(work, StubWork))
    assert stub_work.uri == URIRef("https://www.wikidata.org/wiki/Q937690")


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


@pytest.mark.skipif("CI" in os.environ, reason="don't connect to Google Sheets in CI")
def test_transform_google_sheets_dressdiscover_exhibitions(tmp_path: Path):
    models = tuple(
        SpreadsheetTransformer(pipeline_id="test")(
            **GoogleSheetsExtractor(
                cache_dir_path=tmp_path,
                spreadsheet_id="1j2oaMvMxY4pnXO-sEH_fky2R2gm6TQeIev_Q8rVOD4M",
            )(force=True)
        )
    )
    assert models
    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 5, model_types
    # Don't have the AppConfiguration type here
    assert SchemaCreativeWork in model_types
    assert SchemaImageObject in model_types
    assert SchemaOrganization in model_types
    assert SchemaPerson in model_types
    assert SchemaPlace in model_types
