import os
from pathlib import Path
from typing import List, Tuple

import pdftotext
import pytest
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from rdflib import URIRef


@pytest.fixture(scope="session")
def cache_dir_path(data_dir_path: Path) -> Path:
    return data_dir_path / "test" / "pdf" / ".cache"


@pytest.fixture(scope="session")
def data_dir_path() -> Path:
    path_ = Path(__file__).absolute().parent.parent.parent.parent.parent / "data"
    assert path_.is_dir()
    return path_


@pytest.fixture(scope="session")
def pdf_file_paths(data_dir_path: Path) -> Tuple[Path, ...]:
    pdf_test_data_dir_path = data_dir_path / "test" / "pdf"
    return tuple(
        pdf_test_data_dir_path / file_name
        for file_name in os.listdir(pdf_test_data_dir_path)
        if file_name.startswith("towndex-test-document-") and file_name.endswith(".pdf")
    )


@pytest.fixture(scope="session")
def pdf_texts(pdf_file_paths: Tuple[Path, ...]) -> Tuple[str, ...]:
    result: List[str] = []
    for pdf_file_path in pdf_file_paths:
        with open(pdf_file_path, "rb") as pdf_file:
            pdf = pdftotext.PDF(pdf_file)  # type: ignore
            text: str = "\n\n".join(pdf)  # type: ignore
            result.append(text)
    return tuple(result)


@pytest.fixture(scope="session")
def pdf_works(
    pdf_file_paths: Tuple[Path, ...],
) -> Tuple[SchemaCreativeWork, ...]:
    result: List[SchemaCreativeWork] = []
    for i, pdf_file_path in enumerate(pdf_file_paths):
        builder = SchemaCreativeWork.builder(
            name="Towndex test document " + str(i),
            uri=URIRef(f"https://minorgordon.net/{pdf_file_path.name}"),
        )
        builder.set_encoding_format("application/pdf")
        result.append(builder.build())
    return tuple(result)
