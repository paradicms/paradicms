from paradicms_etl.models.linked_art.linked_art_human_made_object import (
    LinkedArtHumanMadeObject,
)
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)


def test_label(linked_art_human_made_object: LinkedArtHumanMadeObject):
    assert linked_art_human_made_object.label == "Minerva"


def test_rights_statements(linked_art_human_made_object: LinkedArtHumanMadeObject):
    assert linked_art_human_made_object.rights_statements == (
        RightsStatementsDotOrgRightsStatements.NoC_US.uri,
    )
