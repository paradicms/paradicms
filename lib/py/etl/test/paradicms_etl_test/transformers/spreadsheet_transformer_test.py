from pathlib import Path

from paradicms_etl.extractors.excel_2010_extractor import Excel2010Extractor
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.person import Person
from paradicms_etl.transformers.spreadsheet_transformer import SpreadsheetTransformer


def test_transform(excel_2010_test_data_file_path: Path):
    models = tuple(
        SpreadsheetTransformer(pipeline_id="test")(
            **Excel2010Extractor(xlsx_file_path=excel_2010_test_data_file_path)(
                force=False
            )
        )
    )
    assert len(models) == 2
    person = next(person for person in models if isinstance(person, Person))
    image = next(image for image in models if isinstance(image, Image))
    assert person.name == "Minor Gordon"
    assert isinstance(image.src, ImageData)
