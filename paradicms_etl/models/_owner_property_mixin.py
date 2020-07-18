from typing import Optional

from paradicms_etl.namespace import CMS
from rdflib import URIRef
from rdflib.resource import Resource


class _OwnerPropertyMixin:
    @property
    def owner(self) -> Optional[URIRef]:
        object_ = self._get_single_object(CMS.owner)
        if object_ is None:
            return None
        if isinstance(object_, Resource):
            object_ = object_.identifier
        assert isinstance(object_, URIRef)
        return object_

    @owner.setter
    def owner(self, value: URIRef):
        assert isinstance(value, URIRef)
        self._set_single_object(CMS.owner, value)

    def validate(self):
        if self.owner is None:
            raise ValueError("owner required")
