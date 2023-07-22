from rdflib import URIRef


def test_attribution_label(
    getty_iiif_presentation_api_v2_manifest,
):
    assert getty_iiif_presentation_api_v2_manifest.attribution_label


def test_has_sequences(
    getty_iiif_presentation_api_v2_manifest,
):
    sequences = getty_iiif_presentation_api_v2_manifest.has_sequences
    assert len(sequences) == 1
    assert sequences[0].uri == URIRef(
        "https://media.getty.edu/iiif/manifest/9ab53ead-ad00-460c-ab86-559cfd4d839c/default"
    )


def test_label(getty_iiif_presentation_api_v2_manifest):
    assert getty_iiif_presentation_api_v2_manifest.label


def test_rights(getty_iiif_presentation_api_v2_manifest):
    assert getty_iiif_presentation_api_v2_manifest.rights
