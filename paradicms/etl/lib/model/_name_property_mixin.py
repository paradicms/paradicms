from typing import Optional

from rdflib.namespace import FOAF


class _NamePropertyMixin:
    @property
    def name(self) -> Optional[str]:
        return self._get_single_value(FOAF.name, str)

    @name.setter
    def name(self, value: str):
        self._set_single_value(FOAF.name, value)

    def validate(self):
        if self.name is None:
            raise ValueError("name required")
