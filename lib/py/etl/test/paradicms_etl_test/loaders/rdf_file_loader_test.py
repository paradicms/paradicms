from pathlib import Path

from more_itertools import consume
from rdflib import ConjunctiveGraph

from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader


def _assert_is_trig(rdf_file_path: Path):
    assert rdf_file_path.exists()
    graph = ConjunctiveGraph()
    graph.parse(source=rdf_file_path, format="trig")
    assert len(tuple(graph.contexts())) > 1


def _assert_is_ttl(rdf_file_path: Path):
    assert rdf_file_path.exists()
    graph = ConjunctiveGraph()
    graph.parse(source=rdf_file_path, format="ttl")
    assert len(tuple(graph.contexts())) == 1


def test_load_explicit_trig(synthetic_data_models, tmp_path: Path):
    rdf_file_path = tmp_path / "test.trig"
    consume(
        RdfFileLoader(rdf_file_path=rdf_file_path, format="trig")(
            flush=True, models=synthetic_data_models
        )
    )
    _assert_is_trig(rdf_file_path)


def test_load_implicit_trig(synthetic_data_models, tmp_path: Path):
    rdf_file_path = tmp_path / "test.trig"
    consume(
        RdfFileLoader(rdf_file_path=rdf_file_path)(
            flush=True, models=synthetic_data_models
        )
    )
    _assert_is_trig(rdf_file_path)


def test_load_implicit_ttl(synthetic_data_models, tmp_path: Path):
    rdf_file_path = tmp_path / "test.ttl"
    consume(
        RdfFileLoader(rdf_file_path=rdf_file_path)(
            flush=True, models=synthetic_data_models
        )
    )
    _assert_is_ttl(rdf_file_path)
