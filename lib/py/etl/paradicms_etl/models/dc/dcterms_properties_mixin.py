from typing import Optional, Union

from rdflib import DCTERMS, DCMITYPE

from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin
from paradicms_etl.models.text import Text


class DctermsPropertiesMixin(ResourceBackedModelMixin):
    class Builder(ResourceBackedModelMixin.Builder):
        def set_description(
            self, description: Union[str, Text]
        ) -> "DctermsPropertiesMixin.Builder":
            self.set(DCTERMS.description, description)
            return self

        def set_identifier(self, identifier: str) -> "DctermsPropertiesMixin.Builder":
            self.set(DCTERMS.identifier, identifier)
            return self

        def set_title(self, title: str) -> "DctermsPropertiesMixin.Builder":
            self.set(DCTERMS.title, title)
            return self

        def set_version(self, version: str) -> "DctermsPropertiesMixin.Builder":
            self.set(DCTERMS.hasVersion, version)
            return self

    @classmethod
    def json_ld_context(cls):
        return {
            "@vocab": str(DCTERMS),
            "dcmitype": str(DCMITYPE),
            "dcterms": str(DCTERMS),
        }

    @property
    def title(self) -> Optional[str]:
        return self._optional_value(DCTERMS.title, self._map_str_value)
