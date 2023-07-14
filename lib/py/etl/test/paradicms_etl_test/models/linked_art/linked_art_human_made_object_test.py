from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_human_made_object import (
    LinkedArtHumanMadeObject,
)


def test_label(linked_art_human_made_object: LinkedArtHumanMadeObject):
    assert linked_art_human_made_object.label == "Minerva"


def test_licenses(linked_art_human_made_object: LinkedArtHumanMadeObject):
    assert linked_art_human_made_object.licenses == (
        URIRef("http://creativecommons.org/licenses/by/4.0/"),
    )


def test_rights_holders(linked_art_human_made_object: LinkedArtHumanMadeObject):
    assert linked_art_human_made_object.rights_holders == (
        "Text provided by the J. Paul Getty Museum. Licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/).",
    )


def test_rights_statements(linked_art_human_made_object: LinkedArtHumanMadeObject):
    assert linked_art_human_made_object.rights_statements == (
        URIRef("https://rightsstatements.org/vocab/NoC-US/1.0/"),
    )
