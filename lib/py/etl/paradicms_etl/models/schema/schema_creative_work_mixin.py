from typing import Any, Union, Tuple

from rdflib import SDO, URIRef

from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.schema.schema_thing_mixin import SchemaThingMixin


class SchemaCreativeWorkMixin(SchemaThingMixin, RightsMixin):
    class Builder(SchemaThingMixin.Builder, RightsMixin.Builder):
        def add_contributor(
            self, contributor: Any
        ) -> "SchemaCreativeWorkMixin.Builder":
            self.add(SDO.contributor, contributor)
            return self

    @property
    def contributors(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(SDO.contributor, self._map_str_or_uri_value))
