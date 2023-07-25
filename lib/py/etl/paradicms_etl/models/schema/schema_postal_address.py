from typing import Optional

from rdflib import URIRef, Graph, SDO

from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.utils.uuid_urn import uuid_urn


class SchemaPostalAddress(SchemaModel):
    """
    schema:PostalAddress
    """

    class Builder(SchemaModel.Builder):
        def set_address_country(
            self, address_country: str
        ) -> "SchemaPostalAddress.Builder":
            self.set(SDO.addressCountry, address_country)
            return self

        def set_address_locality(
            self, address_locality: str
        ) -> "SchemaPostalAddress.Builder":
            self.set(SDO.addressLocality, address_locality)
            return self

        def set_address_region(
            self, address_region: str
        ) -> "SchemaPostalAddress.Builder":
            self.set(SDO.addressRegion, address_region)
            return self

        def set_postal_code(self, postal_code: str) -> "SchemaPostalAddress.Builder":
            self.set(SDO.postalCode, postal_code)
            return self

        def set_street_address(
            self, street_address: str
        ) -> "SchemaPostalAddress.Builder":
            self.set(SDO.streetAddress, street_address)
            return self

        def build(self) -> "SchemaPostalAddress":
            return SchemaPostalAddress(self._resource)

    @classmethod
    def builder(cls, *, uri: Optional[URIRef] = None) -> Builder:
        return cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))
