from typing import Optional

from rdflib import DC, DCTERMS, URIRef

from paradicms_etl.models.license import License
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CC


class CreativeCommonsLicense(ResourceBackedNamedModel, License):
    @property
    def identifier(self) -> str:
        return self._required_value(DC.identifier, self._map_str_value)

    @property
    def label(self) -> str:
        return self._required_label

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return DC.title

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CC.License

    @property
    def uri(self) -> URIRef:
        return super().uri

    @property
    def version(self) -> Optional[str]:
        return self._optional_value(DCTERMS.hasVersion, self._map_str_value)
