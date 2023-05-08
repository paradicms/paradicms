from rdflib import Graph


def clone_graph(graph: Graph) -> Graph:
    """
    Clone an RDFlib Graph.
    :return new Graph containing all of the triples as the input Graph
    """

    new_graph = Graph()
    new_graph += graph
    return new_graph
