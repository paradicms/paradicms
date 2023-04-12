from typing import Optional

from rdflib import DC, DCTERMS, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_named_model import CmsNamedModel
from paradicms_etl.models.license import License
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsLicense(CmsNamedModel, License):
    LABEL_PROPERTY = DC.title

    class Builder(CmsNamedModel.Builder):
        def __init__(self, *, identifier: str, title: str, uri: URIRef):
            CmsNamedModel.Builder.__init__(self, uri=uri)
            self.set(DC.identifier, identifier)
            self.set(DC.title, title)

        def build(self) -> "CmsLicense":
            return CmsLicense(self._resource)

        def set_version(self, version: str) -> "CmsLicense.Builder":
            self.set(DCTERMS.hasVersion, version)
            return self

    def __init__(self, resource: Resource):
        CmsNamedModel.__init__(self, resource)
        self.identifier
        self.title

    @classmethod
    def builder(cls, *, identifier: str, title: str, uri: URIRef) -> Builder:
        return cls.Builder(identifier=identifier, title=title, uri=uri)

    @property
    def identifier(self) -> str:
        return self._required_str_value(DC.identifier)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsNamedModel.json_ld_context(),
            {
                "identifier": {"@id": str(DC.identifier)},
                "title": {"@id": str(DC.title)},
                "version": {"@id": str(DCTERMS.hasVersion)},
            },
        )

    @property
    def label(self) -> str:
        return self.title

    @property
    def title(self) -> str:
        return self._required_str_value(DC.title)

    @property
    def version(self) -> Optional[str]:
        return self._optional_str_value(DCTERMS.hasVersion)
