from typing import Text, Tuple, Union

from rdflib import SDO, XSD, URIRef

from paradicms_etl.models.date_time_union import DateTimeUnion
from paradicms_etl.models.location import Location
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
        def add_about(
            self, about: Union[str, URIRef]
        ) -> "SchemaCreativeWorkMixin.Builder":
            self.add(SDO.about, about)
            return self

        def add_contributor(
            self, contributor: Union[str, URIRef]
        ) -> "SchemaCreativeWorkMixin.Builder":
            self.add(SDO.contributor, contributor)
            return self

        def add_creator(
            self, creator: Union[str, URIRef]
        ) -> "SchemaCreativeWorkMixin.Builder":
            self.add(SDO.creator, creator)
            return self

        def add_credit_text(
            self, credit_text: str
        ) -> "SchemaCreativeWorkMixin.Builder":
            self.add(SDO.creditText, credit_text)
            return self

        def add_license(
            self, license: Union[str, URIRef]
        ) -> "SchemaCreativeWorkMixin.Builder":
            self.add(SDO.license, license)
            return self

        def add_material(self, material: str) -> "SchemaCreativeWorkMixin.Builder":
            self.add(SDO.material, material)
            return self

        def add_rights_holder(
            self, holder: Union[str, URIRef]
        ) -> "SchemaCreativeWorkMixin.Builder":
            self.add(SDO.copyrightHolder, holder)
            return self

        def add_rights_statement(
            self, statement: Union[str, URIRef]
        ) -> "SchemaCreativeWorkMixin.Builder":
            # schema:usageInfo is not a great fit
            self.add(SDO.usageInfo, statement)
            return self

        def add_spatial(self, spatial: Union[str, Location, URIRef]):
            self.add(SDO.spatial, spatial)
            return self

        def set_date_created(
            self, date_created: DateTimeUnion
        ) -> "SchemaCreativeWorkMixin.Builder":
            self.set(SDO.dateCreated, date_created)
            return self

        def set_date_modified(
            self, date_modified: DateTimeUnion
        ) -> "SchemaCreativeWorkMixin.Builder":
            self.set(SDO.dateModified, date_modified)
            return self

        def set_encoding_format(
            self, encoding_format: str
        ) -> "SchemaCreativeWorkMixin.Builder":
            self.set(SDO.encodingFormat, encoding_format)
            return self

        def set_size(self, size: str) -> "SchemaCreativeWorkMixin.Builder":
            self.set(SDO.size, size)
            return self

        def set_text(self, text: Union[str, Text]) -> "SchemaCreativeWorkMixin.Builder":
            self.set(SDO.text, text)
            return self

    @property
    def contributors(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(SDO.contributor, self._map_term_to_str_or_uri))

    @property
    def creators(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(SDO.creator, self._map_term_to_str_or_uri))

    @classmethod
    def json_ld_context(cls):
        json_ld_context = {
            "dateCreated": {
                "@id": str(SDO.dateCreated),
                "@type": str(XSD.dateTime),
            },
            "dateModified": {
                "@id": str(SDO.dateModified),
                "@type": str(XSD.dateTime),
            },
            "locationCreated": {"@id": str(SDO.locationCreated), "@type": "@id"},
        }
        for property_ in (
            "contributor",
            "copyrightHolder",
            "creator",
            "license",
            "usageInfo",
        ):
            json_ld_context[property_] = {
                "@id": str(getattr(SDO, property_)),
                "@type": "@id",
            }
            json_ld_context[property_ + "Literal"] = {
                "@id": str(getattr(SDO, property_))
            }
        return json_ld_context

    @property
    def licenses(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(SDO.license, self._map_term_to_str_or_uri))

    @property
    def rights_holders(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(SDO.copyrightHolder, self._map_term_to_str_or_uri))

    @property
    def rights_statements(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(SDO.usageInfo, self._map_term_to_str_or_uri))
