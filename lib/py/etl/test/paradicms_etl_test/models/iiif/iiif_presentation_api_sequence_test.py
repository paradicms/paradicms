from paradicms_etl.models.iiif.iiif_presentation_api_sequence import (
    IiifPresentationApiSequence,
)


def test_has_canvases(
    getty_iiif_presentation_api_sequence: IiifPresentationApiSequence,
):
    assert getty_iiif_presentation_api_sequence.has_canvases
