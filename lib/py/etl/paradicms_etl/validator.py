from typing import Iterable, Callable, Union

from paradicms_etl.model import Model
from paradicms_etl.validation_result import ValidationResult

Validator = Callable[[Iterable[Model]], Iterable[Union[Model, ValidationResult]]]
