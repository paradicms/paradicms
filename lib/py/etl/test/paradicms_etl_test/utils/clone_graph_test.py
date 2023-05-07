from typing import Tuple

from rdflib import Graph

from paradicms_etl.model import Model
from paradicms_etl.utils.clone_graph import clone_graph


def test_clone_graph(synthetic_data_models: Tuple[Model, ...]):
    graph = Graph()
    synthetic_data_models[0].to_rdf(graph=graph)
    assert len(graph)

    cloned_graph = clone_graph(graph)
    assert len(cloned_graph) == len(graph)
    assert graph.isomorphic(cloned_graph)
