from typing import Optional

from rdflib.namespace import DCTERMS


class _TitlePropertyMixin:
    @property
    def title(self) -> Optional[str]:
        return self._get_single_value(DCTERMS.title, str)

    @title.setter
    def title(self, value: str):
        self._set_single_value(DCTERMS.title, value)

    def validate(self):
        if self.title is None:
            raise ValueError("title required")
