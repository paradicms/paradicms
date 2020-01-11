from rdflib.namespace import FOAF

from ._model import _Model
from ._owner_property_mixin import _OwnerPropertyMixin
from .collection import Collection
from ..namespace import CMS


class Institution(_Model, _OwnerPropertyMixin):
    def add_collection(self, collection: Collection):
        collection.validate()
        self.resource.add(CMS.collection, collection.uri)

    @property
    def name(self) -> str:
        return self.get_single_value(FOAF.name)

    @name.setter
    def name(self, value: str):
        self._set_single_value(FOAF.name, value)

    def validate(self):
        _OwnerPropertyMixin.validate(self)

        if self._get_single_value(FOAF.name) is None:
            raise ValueError("name required")
