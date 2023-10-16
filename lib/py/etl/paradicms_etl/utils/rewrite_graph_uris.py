from rdflib import Graph, URIRef


def rewrite_graph_uris(graph: Graph, uri_map: dict[URIRef, URIRef]) -> Graph:
    """
    Use the given uri_map to rewrite the URIs in the given graph.

    Return the rewritten graph.
    """

    rewritten_graph = Graph()
    rewrote = False
    for s, p, o in graph:
        if isinstance(s, URIRef) and s in uri_map:
            raise NotImplementedError("subject URI rewriting not supported")
        if p in uri_map:
            raise NotImplementedError("predicate URI rewriting not supported")
        if isinstance(o, URIRef):
            rewritten_o = uri_map.get(o)
            if rewritten_o is not None:
                rewritten_graph.add((s, p, rewritten_o))
                rewrote = True
            else:
                rewritten_graph.add((s, p, o))
        else:
            rewritten_graph.add((s, p, o))

    if rewrote:
        return rewritten_graph
    return graph
