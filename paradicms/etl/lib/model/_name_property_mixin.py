from typing import Optional

from rdflib.namespace import FOAF


class _NamePropertyMixin:
    """
    FOAF.name property mixin. Prefer FOAF to schema.org because the former is more widely linked with other vocabularies.
    """

    @property
    def name(self) -> Optional[str]:
        return self._get_single_value(FOAF.name, str)

    @name.setter
    def name(self, value: str):
        self._set_single_value(FOAF.name, value)

    def validate(self):
        if self.name is None:
            raise ValueError("name required")
