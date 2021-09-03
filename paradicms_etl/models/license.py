from typing import Optional

from rdflib import DCTERMS, Literal, URIRef

from paradicms_etl.models._named_model import _NamedModel


class License(_NamedModel):
    """
    A license. Adapted from the creativecommons.org license RDF (https://github.com/creativecommons/cc.licenserdf).
    """

    def __init__(
        self, *, identifier: str, title: str, uri: URIRef, version: Optional[str] = None
    ):
        _NamedModel.__init__(self, uri=uri)
        self.resource.add(DCTERMS.identifier, Literal(identifier))
        self.resource.add(DCTERMS.title, Literal(title))
        if version is not None:
            self.resource.add(DCTERMS.hasVersion, Literal(version))
