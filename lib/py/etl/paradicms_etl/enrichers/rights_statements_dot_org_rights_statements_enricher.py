from typing import Iterable

from rdflib import DCTERMS

from paradicms_etl.model import Model
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.utils.known_model_tracker import KnownModelTracker


def rights_statements_dot_org_rights_statements_enricher(
    models: Iterable[Model],
) -> Iterable[Model]:
    tracker = KnownModelTracker(
        model_class=RightsStatement,
        models_by_uri={
            rights_statement.uri: rights_statement
            for rights_statement in RightsStatementsDotOrgRightsStatements.as_tuple()
        },
        referring_predicate=DCTERMS.rights,
    )

    for model in models:
        tracker(model)
        yield model

    yield from tracker.missing_models()
