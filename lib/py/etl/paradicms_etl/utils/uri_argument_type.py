from rdflib import URIRef


def uri_argument_type(value: str) -> URIRef:
    return URIRef(value)
