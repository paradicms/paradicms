import pytest
from rdflib import SDO, Literal, URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.utils.merge_same_as_models import merge_same_as_models


@pytest.fixture(scope="session")
def source_model_uri() -> URIRef:
    return URIRef("http://example.com/source")


@pytest.fixture(scope="session")
def source_model(
    source_model_uri: URIRef, target_model_uri: URIRef
) -> ResourceBackedModel:
    return (
        SchemaCollection.builder(name="Source", uri=source_model_uri)
        .add_same_as(target_model_uri)
        .build()  # type: ignore
    )


@pytest.fixture(scope="session")
def target_model_uri() -> URIRef:
    return URIRef("http://example.com/target")


@pytest.fixture(scope="session")
def target_model(target_model_uri: URIRef) -> ResourceBackedModel:
    return SchemaCollection.builder(name="Source", uri=target_model_uri).build()


def test_nop(target_model: ResourceBackedModel) -> None:
    actual = tuple(merge_same_as_models({target_model.uri: target_model}))
    assert len(actual) == 1
    assert isinstance(actual[0], ResourceBackedModel)
    assert id(actual[0]) == id(target_model)


def test_merge(
    source_model: ResourceBackedModel, target_model: ResourceBackedModel
) -> None:
    actuals = tuple(
        merge_same_as_models(
            {source_model.uri: source_model, target_model.uri: target_model}
        )
    )
    assert len(actuals) == 1
    actual = actuals[0]
    assert isinstance(actual, ResourceBackedModel)
    assert id(actual) != id(source_model)
    assert id(actual) != id(target_model)
    assert not actual.same_as_uris
    assert actual.uri == source_model.uri
    names = set(actual.resource.graph.objects(SDO.name))
    assert Literal("Source") in names
    assert Literal("Target") in names
