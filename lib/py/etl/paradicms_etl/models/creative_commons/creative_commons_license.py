from typing import Optional, Dict, Any

from rdflib import DC, DCTERMS, URIRef

from paradicms_etl.models.license import License
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import CC
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CreativeCommonsLicense(ResourceBackedModel, License):
    @property
    def identifier(self) -> str:
        return self._required_value(DC.identifier, self._map_str_value)

    @classmethod
    def json_ld_context(cls) -> Dict[str, Any]:
        return safe_dict_update(
            ResourceBackedModel.json_ld_context(),
            {"identifier": str(DC.identifier), "title": str(DC.title)},
        )

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
