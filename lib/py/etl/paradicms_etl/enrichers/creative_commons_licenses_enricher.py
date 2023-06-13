from typing import Iterable

from rdflib import DCTERMS

from paradicms_etl.model import Model
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.license import License
from paradicms_etl.utils.known_model_tracker import KnownModelTracker


def creative_commons_licenses_enricher(models: Iterable[Model]) -> Iterable[Model]:
    tracker = KnownModelTracker(
        model_class=License,
        models_by_uri={
            license.uri: license for license in CreativeCommonsLicenses.as_tuple()
        },
        referring_predicate=DCTERMS.license,
    )

    for model in models:
        tracker(model)
        yield model

    yield from tracker.missing_models()
