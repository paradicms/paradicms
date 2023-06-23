from datetime import datetime, date
from typing import Any, Union, Tuple, Optional

from rdflib import SDO, URIRef, XSD

from paradicms_etl.models.date_time_description import DateTimeDescription
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.schema.schema_thing_mixin import SchemaThingMixin


class SchemaCreativeWorkMixin(SchemaThingMixin, RightsMixin):
    """
    Mixin for models such as SchemaImageObject that have schema:CreativeWork properties.

    In schema.org, schema:ImageObject is a subclass of schema:CreativeWork.
    However, we don't want SchemaImageObject to be a subclass of SchemaCreativeWork, since the latter implements the
    Work model interface and the former should not.
    """

    class Builder(SchemaThingMixin.Builder, RightsMixin.Builder):
        def add_contributor(
            self, contributor: Any
        ) -> "SchemaCreativeWorkMixin.Builder":
            self.add(SDO.contributor, contributor)
            return self

        def add_creator(self, creator: Any) -> "SchemaCreativeWorkMixin.Builder":
            self.add(SDO.creator, creator)
            return self

        def add_license(self, license: Any) -> "SchemaCreativeWorkMixin.Builder":
            self.add(SDO.license, license)
            return self

        def add_rights_holder(self, holder: Any) -> "SchemaCreativeWorkMixin.Builder":
            self.add(SDO.copyrightHolder, holder)
            return self

        def add_rights_statement(
            self, statement: Any
        ) -> "SchemaCreativeWorkMixin.Builder":
            # schema:usageInfo is not a great fit
            self.add(SDO.usageInfo, statement)
            return self

        def set_date_created(
            self, date_created: Union[date, datetime, DateTimeDescription]
        ) -> "SchemaCreativeWorkMixin.Builder":
            self.set(SDO.dateCreated, date_created)
            return self

        def set_date_modified(
            self, date_modified: Union[date, datetime, DateTimeDescription]
        ) -> "SchemaCreativeWorkMixin.Builder":
            self.set(SDO.dateModified, date_modified)
            return self

    @property
    def contributors(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(SDO.contributor, self._map_str_or_uri_value))

    @property
    def creators(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(SDO.creator, self._map_str_or_uri_value))

    @classmethod
    def json_ld_context(cls):
        return {
            "dateCreated": {
                "@id": str(SDO.dateCreated),
                "@type": str(XSD.dateTime),
            },
            "dateModified": {
                "@id": str(SDO.dateModified),
                "@type": str(XSD.dateTime),
            },
            "url": {"@id": str(SDO.url), "@type": "@id"},
        }

    @property
    def license(self) -> Union[str, URIRef, None]:
        return self._optional_value(SDO.license, self._map_str_or_uri_value)

    @property
    def rights_holders(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(SDO.copyrightHolder, self._map_str_or_uri_value))

    @property
    def rights_statement(self) -> Union[str, URIRef, None]:
        return self._optional_value(SDO.usageInfo, self._map_str_or_uri_value)

    @property
    def source(self) -> Optional[URIRef]:
        return self.url