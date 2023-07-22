from pathlib import Path

import pytest
from rdflib import Graph, URIRef

from paradicms_etl.models.linked_art.linked_art_human_made_object import (
    LinkedArtHumanMadeObject,
)


@pytest.fixture(scope="session")
def getty_linked_art_human_made_object() -> LinkedArtHumanMadeObject:
    return LinkedArtHumanMadeObject.from_rdf(
        Graph()
        .parse(
            # Use the .ttl in order to avoid resolving the JSON-LD context here
            source=str(Path(__file__).parent / "getty_linked_art_human_made_object.ttl")
        )
        .resource(
            URIRef(
                "https://data.getty.edu/museum/collection/object/4d302ecd-f3a5-4e52-9e97-ca3ca8d5c9e6"
            )
        )
    )


@pytest.fixture(scope="session")
def yale_linked_art_human_made_object() -> LinkedArtHumanMadeObject:
    return LinkedArtHumanMadeObject.from_rdf(
        Graph()
        .parse(
            # Use the .ttl in order to avoid resolving the JSON-LD context here
            source=str(Path(__file__).parent / "yale_linked_art_human_made_object.ttl"),
        )
        .resource(
            URIRef(
                "https://lux.collections.yale.edu/data/object/25a33e3e-5ac3-4154-9d01-2cbbf87713ed"
            )
        )
    )
