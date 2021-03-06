from typing import Optional

from rdflib import DC, DCTERMS, URIRef, RDF

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder


class License(ResourceBackedNamedModel):
    """
    A license. Adapted from the creativecommons.org license RDF (https://github.com/creativecommons/cc.licenserdf).
    """

    def __init__(self, *args, **kwds):
        ResourceBackedNamedModel.__init__(self, *args, **kwds)
        self._resource.add(RDF.type, CMS[self.__class__.__name__])
        self.identifier
        self.title

    @classmethod
    def from_fields(
        cls, *, identifier: str, title: str, uri: URIRef, version: Optional[str] = None
    ) -> "License":
        return cls(
            ResourceBuilder(uri)
            .add(RDF.type, CMS[cls.__name__])
            .add(DC.identifier, identifier)
            .add(DC.title, title)
            .add(DCTERMS.hasVersion, version)
            .build()
        )

    @property
    def identifier(self) -> str:
        return self._required_str_value(DC.identifier)

    @property
    def label(self) -> str:
        return self.title

    @property
    def title(self) -> str:
        return self._required_str_value(DC.title)

    @property
    def version(self) -> Optional[str]:
        return self._optional_str_value(DCTERMS.hasVersion)
