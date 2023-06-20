from rdflib import SDO

from paradicms_etl.models.schema.schema_creative_work_mixin import (
    SchemaCreativeWorkMixin,
)


class SchemaMediaObjectMixin(SchemaCreativeWorkMixin):
    """
    Mixin for models such as SchemaImageObject that have schema:MediaObject properties.
    """

    class Builder(SchemaCreativeWorkMixin.Builder):
        def set_encoding_format(
            self, encoding_format: str
        ) -> "SchemaMediaObjectMixin.Builder":
            self.set(SDO.encodingFormat, encoding_format)
            return self
