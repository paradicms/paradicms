from typing import Iterable

from paradicms_etl.model import Model


def NopLoader(*, models: Iterable[Model], **kwds):
    # Iterate over models to exhaust the generator
    for _ in models:
        pass
