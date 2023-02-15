from typing import Iterable, Callable

from paradicms_etl.model import Model

Transformer = Callable[..., Iterable[Model]]
