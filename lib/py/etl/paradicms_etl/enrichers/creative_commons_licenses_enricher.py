from typing import Iterable

from paradicms_etl.model import Model
from paradicms_etl.models.creative_commons.creative_commons_license import (
    CreativeCommonsLicense,
)
from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.text import Text
from paradicms_etl.models.work import Work
from paradicms_etl.utils.known_model_tracker import KnownModelTracker


def creative_commons_licenses_enricher(models: Iterable[Model]) -> Iterable[Model]:
    def get_references(model: Model):
        if isinstance(model, Work):
            if isinstance(model.description, Text):
                return model.description.licenses
        elif isinstance(model, RightsMixin):
            return model.licenses
        return ()

    tracker: KnownModelTracker[CreativeCommonsLicense] = KnownModelTracker(
        get_references=get_references,
        model_class=CreativeCommonsLicense,
        models_by_uri=CreativeCommonsLicenses.by_uri(),
    )

    for model in models:
        tracker(model)
        yield model

    yield from tracker.missing_models()
