from typing import Iterable

from paradicms_etl.model import Model
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statement import (
    RightsStatementsDotOrgRightsStatement,
)
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.text import Text
from paradicms_etl.models.work import Work
from paradicms_etl.utils.known_model_tracker import KnownModelTracker


def rights_statements_dot_org_rights_statements_enricher(
    models: Iterable[Model],
) -> Iterable[Model]:
    def get_references(model: Model):
        if isinstance(model, Work):
            if isinstance(model.description, Text):
                return model.description.rights_statements
        elif isinstance(model, RightsMixin):
            return model.rights_statements
        return ()

    tracker = KnownModelTracker(
        get_references=get_references,
        model_class=RightsStatementsDotOrgRightsStatement,
        models_by_uri=RightsStatementsDotOrgRightsStatements.by_uri(),
    )

    for model in models:
        tracker(model)
        yield model

    yield from tracker.missing_models()
