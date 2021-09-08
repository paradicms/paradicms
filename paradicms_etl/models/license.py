from typing import Optional

from rdflib import DCTERMS, Literal, URIRef

from paradicms_etl.models._named_model import _NamedModel


class License(_NamedModel):
    """
    A license. Adapted from the creativecommons.org license RDF (https://github.com/creativecommons/cc.licenserdf).
    """

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
