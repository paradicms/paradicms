from typing import Optional

from rdflib import DC, DCTERMS, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class License(ResourceBackedNamedModel):
    """
    A license. Adapted from the creativecommons.org license RDF (https://github.com/creativecommons/cc.licenserdf).
    """

    LABEL_PROPERTY = DC.title

    def __init__(self, resource: Resource):
        ResourceBackedNamedModel.__init__(self, resource)
        self.identifier
        self.title

    @classmethod
    def from_fields(
        cls, *, identifier: str, title: str, uri: URIRef, version: Optional[str] = None
    ) -> "License":
        return cls(
            ResourceBuilder(uri)
            .add(DC.identifier, identifier)
            .add(DC.title, title)
            .add(DCTERMS.hasVersion, version)
            .build()
        )

    @property
    def identifier(self) -> str:
        return self._required_str_value(DC.identifier)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
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
