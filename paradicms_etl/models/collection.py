from paradicms_etl._model import _Model
from ._owner_property_mixin import _OwnerPropertyMixin
from ._title_property_mixin import _TitlePropertyMixin
from .object import Object
from ..namespace import CMS


class Collection(_Model, _OwnerPropertyMixin, _TitlePropertyMixin):
    def add_object(self, object_: Object):
        object_.validate()
        self.resource.add(CMS.object, object_.uri)

    def validate(self):
        _OwnerPropertyMixin.validate(self)
        _TitlePropertyMixin.validate(self)
