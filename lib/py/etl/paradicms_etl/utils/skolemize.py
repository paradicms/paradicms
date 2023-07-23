from rdflib import Graph


def skolemize(graph: Graph) -> Graph:
    """
    Skolemize a Graph using Paradicms identifiers.
    :return: the skolemized Graph
    """

    return graph.skolemize(authority="http://paradicms.org", basepath="/bnode/")
