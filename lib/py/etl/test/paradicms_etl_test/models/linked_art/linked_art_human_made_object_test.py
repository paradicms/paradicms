from rdflib import URIRef


def test_getty_label(getty_linked_art_human_made_object):
    assert getty_linked_art_human_made_object.label == "Minerva"


def test_getty_description(getty_linked_art_human_made_object):
    assert getty_linked_art_human_made_object.description
    assert getty_linked_art_human_made_object.description.licenses == (
        URIRef("http://creativecommons.org/licenses/by/4.0/"),
    )
    assert getty_linked_art_human_made_object.description.rights_holders == (
        "Text provided by the J. Paul Getty Museum. Licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/).",
    )
    # The rights statement is on the human-made object metadata, not on the description
    # assert getty_linked_art_human_made_object.description.rights_statements == (
    #     URIRef("https://rightsstatements.org/vocab/NoC-US/1.0/"),
    # )


# def test_getty_image_uris(getty_linked_art_human_made_object):
#     assert getty_linked_art_human_made_object.image_uris == (
#         URIRef(
#             "https://media.getty.edu/iiif/image/fcbc34dd-cd8a-4a5b-8fd6-cd769588b9a8/full/full/0/default.jpg"
#         ),
#     )


def test_yale_label(yale_linked_art_human_made_object):
    assert yale_linked_art_human_made_object.label == "The Judgement Of Paris"
