from pathlib import Path

import pytest
from rdflib import Graph, URIRef

from paradicms_etl.models.iiif.iiif_presentation_api_v2_canvas import (
    IiifPresentationApiV2Canvas,
)
from paradicms_etl.models.iiif.iiif_presentation_api_v2_manifest import (
    IiifPresentationApiV2Manifest,
)
from paradicms_etl.models.iiif.iiif_presentation_api_v2_sequence import (
    IiifPresentationApiV2Sequence,
)


@pytest.fixture(scope="session")
def getty_iiif_presentation_api_v2_canvas(
    getty_iiif_presentation_api_v2_sequence: IiifPresentationApiV2Sequence,
) -> IiifPresentationApiV2Canvas:
    return getty_iiif_presentation_api_v2_sequence.has_canvases[0]


@pytest.fixture(scope="session")
def getty_iiif_presentation_api_v2_manifest() -> IiifPresentationApiV2Manifest:
    return IiifPresentationApiV2Manifest.from_rdf(
        Graph()
        .parse(
            source=str(
                # Use the .ttl in order to avoid resolving the JSON-LD context here
                Path(__file__).parent
                / "getty_iiif_presentation_api_v2_manifest.ttl"
            )
        )
        .resource(
            URIRef(
                "https://media.getty.edu/iiif/manifest/9ab53ead-ad00-460c-ab86-559cfd4d839c"
            )
        )
    )


@pytest.fixture(scope="session")
def getty_iiif_presentation_api_v2_sequence(
    getty_iiif_presentation_api_v2_manifest,
) -> IiifPresentationApiV2Sequence:
    return getty_iiif_presentation_api_v2_manifest.has_sequences[0]
