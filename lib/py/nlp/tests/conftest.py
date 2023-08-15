import shutil
from pathlib import Path
from typing import Any, Iterable

import pytest
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from rdflib import URIRef


@pytest.fixture(scope="session")
def cache_dir_path(tmp_path_factory: Any) -> Iterable[Path]:
    cache_dir_path = tmp_path_factory.mktemp("cache")
    yield cache_dir_path
    shutil.rmtree(cache_dir_path)


@pytest.fixture(scope="session")
def data_dir_path() -> Path:
    path_ = Path(__file__).absolute().parent.parent.parent.parent.parent / "data"
    assert path_.is_dir()
    return path_


@pytest.fixture(scope="session")
def towndex_test_document_1_pdf_file_path(data_dir_path: Path) -> Path:
    return data_dir_path / "test" / "pdf" / "towndex-test-document-1.pdf"


@pytest.fixture(scope="session")
def towndex_test_document_1_pdf_work(
    towndex_test_document_1_pdf_file_path: Path,
) -> SchemaCreativeWork:
    builder = SchemaCreativeWork.builder(
        name="Towndex test document 1",
        uri=URIRef("https://minorgordon.net/towndex-test-document-1.pdf"),
    )
    builder.set_encoding_format("application/pdf")
    return builder.build()
