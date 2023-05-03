from typing import Iterable, Callable

from paradicms_etl.model import Model

Enricher = Callable[[Iterable[Model]], Iterable[Model]]
