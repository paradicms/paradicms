from paradicms_etl.models.dc.dc_image import DcImage
from paradicms_etl.models.iiif.iiif_presentation_api_canvas import (
    IiifPresentationApiCanvas,
)


def test_has_image_annotations(
    getty_iiif_presentation_api_canvas: IiifPresentationApiCanvas,
):
    assert getty_iiif_presentation_api_canvas.has_image_annotations
    for image_annotation in getty_iiif_presentation_api_canvas.has_image_annotations:
        assert isinstance(image_annotation.has_body, DcImage)


def test_label(
    getty_iiif_presentation_api_canvas: IiifPresentationApiCanvas,
):
    assert getty_iiif_presentation_api_canvas.label


def test_rights(
    getty_iiif_presentation_api_canvas: IiifPresentationApiCanvas,
):
    assert getty_iiif_presentation_api_canvas.rights
