from typing import Optional

from rdflib.namespace import FOAF

from ._model import _Model
from ._name_property_mixin import _NamePropertyMixin
from ..namespace import CONTACT


class Person(_Model, _NamePropertyMixin):
    @property
    def family_name(self) -> Optional[str]:
        return self._get_single_value(FOAF.familyName, str)

    @family_name.setter
    def family_name(self, value: str):
        self._set_single_value(FOAF.familyName, value)

    @property
    def given_name(self) -> Optional[str]:
        return self._get_single_value(FOAF.givenName, str)

    @given_name.setter
    def given_name(self, value: str):
        self._set_single_value(FOAF.givenName, value)

    @property
    def sort_name(self) -> Optional[str]:
        return self._get_single_value(CONTACT.sortName, str)

    @sort_name.setter
    def sort_name(self, value: str):
        self._set_single_value(CONTACT.sortName, value)

    def validate(self):
        _NamePropertyMixin.validate(self)
