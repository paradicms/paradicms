from uuid import uuid4

from rdflib import URIRef


def uuid_urn() -> URIRef:
    """
    Generate a UUID URN (https://datatracker.ietf.org/doc/html/rfc4122).
    """
    return URIRef(f"urn:uuid:{uuid4()}")
