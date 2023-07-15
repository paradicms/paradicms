from pathlib import Path

import pytest
from rdflib import Graph, URIRef

from paradicms_etl.models.iiif.iiif_presentation_api_manifest import (
    IiifPresentationApiManifest,
)
from paradicms_etl.models.iiif.iiif_presentation_api_sequence import (
    IiifPresentationApiSequence,
)


@pytest.fixture(scope="session")
def getty_iiif_presentation_api_manifest() -> IiifPresentationApiManifest:
    return IiifPresentationApiManifest.from_rdf(
        Graph()
        .parse(
            source=str(
                # Use the .ttl in order to avoid resolving the JSON-LD context here
                Path(__file__).parent
                / "getty_iiif_presentation_api_manifest.ttl"
            )
        )
        .resource(
            URIRef(
                "https://media.getty.edu/iiif/manifest/9ab53ead-ad00-460c-ab86-559cfd4d839c"
            )
        )
    )


@pytest.fixture(scope="session")
def getty_iiif_presentation_api_sequence(
    getty_iiif_presentation_api_manifest: IiifPresentationApiManifest,
) -> IiifPresentationApiSequence:
    return getty_iiif_presentation_api_manifest.has_sequences[0]
