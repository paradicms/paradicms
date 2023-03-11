from pathlib import Path

import pytest
from PIL import Image
from rdflib import Graph

from paradicms_etl.models.image_data import ImageData


@pytest.fixture
def test_pil_image(test_image_file_path: Path) -> Image:
    with Image.open(str(test_image_file_path)) as pil_image:
        return pil_image.copy().convert("RGB")


@pytest.fixture
def test_image_data(test_pil_image: Image) -> ImageData:
    return ImageData.from_pil_image(test_pil_image)


def test_from_pil_image(test_pil_image: Image):
    ImageData.from_pil_image(test_pil_image)


def test_from_rdf(test_image_data: ImageData):
    actual_image_data = ImageData.from_rdf(resource=test_image_data.to_rdf(Graph()))
    assert actual_image_data.to_json_ld() == test_image_data.to_json_ld()


def test_to_json_ld(test_image_data: ImageData):
    json_ld = test_image_data.to_json_ld()
    graph = Graph()
    graph.parse(data=json_ld, format="json-ld")
    ImageData.from_rdf(graph.resource(tuple(graph.subjects())[0]))


def test_to_pil_image(test_pil_image: Image):
    image_data = ImageData.from_pil_image(test_pil_image)
    actual_pil_image = image_data.to_pil_image()
    assert actual_pil_image.size == test_pil_image.size


def test_to_rdf(test_image_data: ImageData):
    test_image_data.to_rdf(Graph())
