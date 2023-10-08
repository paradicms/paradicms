from collections.abc import Callable, Iterable

from paradicms_etl.model import Model
from paradicms_etl.validation_result import ValidationResult

Validator = Callable[[Iterable[Model]], Iterable[Model | ValidationResult]]
