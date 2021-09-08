from typing import Optional

from rdflib import DC, DCTERMS, Literal, URIRef

from paradicms_etl.models._named_model import _NamedModel


class License(_NamedModel):
    """
    A license. Adapted from the creativecommons.org license RDF (https://github.com/creativecommons/cc.licenserdf).
    """

    def __init__(self, *args, **kwds):
        _NamedModel.__init__(self, *args, **kwds)
        self.identifier
        self.title

    @classmethod
    def from_fields(
        cls, *, identifier: str, title: str, uri: URIRef, version: Optional[str] = None
    ):
        resource = cls._create_resource(identifier=uri)
        cls.add(DCTERMS.identifier, Literal(identifier))
        cls.add(DCTERMS.title, Literal(title))
        if version is not None:
            cls.add(DCTERMS.hasVersion, Literal(version))
        return cls(resource)

    @property
    def identifier(self) -> str:
        return self._required_str_value((DC.identifier, DCTERMS.identifier))

    @property
    def title(self) -> str:
        return self._required_str_value((DC.title, DCTERMS.title))

    @property
    def version(self) -> Optional[str]:
        return self._optional_str_value(DCTERMS.hasVersion)
