from typing import Optional

from rdflib import DC, DCTERMS, Literal, URIRef

from paradicms_etl.models.named_model import NamedModel


class License(NamedModel):
    """
    A license. Adapted from the creativecommons.org license RDF (https://github.com/creativecommons/cc.licenserdf).
    """

    def __init__(self, *args, **kwds):
        NamedModel.__init__(self, *args, **kwds)
        self.identifier
        self.title

    @classmethod
    def from_fields(
        cls, *, identifier: str, title: str, uri: URIRef, version: Optional[str] = None
    ) -> "License":
        resource = cls._create_resource(identifier=uri)
        resource.add(DC.identifier, Literal(identifier))
        resource.add(DC.title, Literal(title))
        if version is not None:
            resource.add(DCTERMS.hasVersion, Literal(version))
        return cls(resource)

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
