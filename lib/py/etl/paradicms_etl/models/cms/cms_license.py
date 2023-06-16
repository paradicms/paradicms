from typing import Optional

from rdflib import DC, DCTERMS, URIRef, Graph, BNode
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_model import CmsModel
from paradicms_etl.models.license import License
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsLicense(CmsModel, License):
    class Builder(CmsModel.Builder):
        def build(self) -> "CmsLicense":
            return CmsLicense(self._resource)

        def set_version(self, version: str) -> "CmsLicense.Builder":
            self.set(DCTERMS.hasVersion, version)
            return self

    def __init__(self, resource: Resource):
        CmsModel.__init__(self, resource)
        self.identifier
        self.title

    @classmethod
    def builder(
        cls, *, identifier: str, title: str, uri: Optional[URIRef] = None
    ) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else BNode()))
        builder.set(DC.identifier, identifier)
        builder.set(DC.title, title)
        return builder

    @property
    def identifier(self) -> str:
        return self._required_value(DC.identifier, self._map_str_value)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsModel.json_ld_context(),
            {
                "identifier": {"@id": str(DC.identifier)},
                "title": {"@id": str(DC.title)},
                "version": {"@id": str(DCTERMS.hasVersion)},
            },
        )

    @property
    def label(self) -> str:
        return self.title

    @classmethod
    def label_property_uri(cls):
        return DC.title

    @property
    def title(self) -> str:
        return self._required_value(DC.title, self._map_str_value)

    @property
    def version(self) -> Optional[str]:
        return self._optional_value(DCTERMS.hasVersion, self._map_str_value)
