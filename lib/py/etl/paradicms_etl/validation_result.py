from dataclasses import dataclass
from enum import Enum


@dataclass(frozen=True)
class ValidationResult:
    """
    A result produced by a validation process and incorporated into a validation report.

    Modeled on SHACL sh:ValidationResult (https://www.w3.org/TR/shacl/#result).
    """

    class Severity(Enum):
        """
        Validation result severity.

        Modeled on SHACL sh:resultSeverity (https://www.w3.org/TR/shacl/#results-severity).
        """

        INFO = "info"
        WARNING = "warning"
        VIOLATION = "violation"

    message: str
    severity: Severity
