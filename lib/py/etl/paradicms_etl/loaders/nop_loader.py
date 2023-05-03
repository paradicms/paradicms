from typing import Iterable

from paradicms_etl.model import Model


def nop_loader(*, models: Iterable[Model], **kwds) -> Iterable[Model]:
    # Iterate over models to exhaust the generator
    yield from models
