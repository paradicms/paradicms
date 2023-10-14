from rdflib import Graph, URIRef


def rewrite_graph_uris(graph: Graph, uri_map: dict[URIRef, URIRef]) -> Graph:
    """
    Use the given uri_map to rewrite the URIs in the given graph.

    Return the rewritten graph.
    """

    result = Graph()
    for s, p, o in graph:
        if isinstance(s, URIRef) and s in uri_map:
            raise NotImplementedError("subject URI rewriting not supported")
        if p in uri_map:
            raise NotImplementedError("predicate URI rewriting not supported")
        rewritten_o = uri_map.get(o, o) if isinstance(o, URIRef) else o
        result.add((s, p, rewritten_o))

    return result
