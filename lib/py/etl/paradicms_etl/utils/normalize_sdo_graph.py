from rdflib import Graph

from paradicms_etl.utils.normalize_sdo_node import normalize_sdo_node


def normalize_sdo_graph(graph: Graph) -> Graph:
    """
    Normalize schema.org URIs in a graph from http:// to https://
    """

    normalized_graph = Graph()
    for s, p, o in graph:
        normalized_graph.add(
            (normalize_sdo_node(s), normalize_sdo_node(p), normalize_sdo_node(o))
        )
    return normalized_graph
