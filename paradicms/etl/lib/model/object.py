from ._model import _Model
from ._owner_property_mixin import _OwnerPropertyMixin
from ._title_property_mixin import _TitlePropertyMixin


class Object(_Model, _OwnerPropertyMixin, _TitlePropertyMixin):
    def validate(self):
        _OwnerPropertyMixin.validate(self)
        _TitlePropertyMixin.validate(self)
