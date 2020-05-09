from ._model import _Model
from ._name_property_mixin import _NamePropertyMixin
from ._owner_property_mixin import _OwnerPropertyMixin
from .collection import Collection
from ..namespace import CMS


class Institution(_Model, _NamePropertyMixin, _OwnerPropertyMixin):
    def add_collection(self, collection: Collection):
        collection.validate()
        self.resource.add(CMS.collection, collection.uri)

    def validate(self):
        _NamePropertyMixin.validate(self)
        _OwnerPropertyMixin.validate(self)
