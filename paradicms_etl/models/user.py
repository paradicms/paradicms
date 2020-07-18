from typing import Optional

from rdflib.namespace import FOAF

from paradicms_etl._model import _Model
from paradicms_etl.models._name_property_mixin import _NamePropertyMixin


class User(_Model, _NamePropertyMixin):
    @property
    def email(self) -> Optional[str]:
        return self._get_single_value(FOAF.mbox, str)

    @email.setter
    def email(self, value: str):
        self._set_single_value(FOAF.mbox, value)

    def validate(self):
        if self.email is None:
            raise ValueError("email required")
        _NamePropertyMixin.validate(self)
