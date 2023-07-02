from typing import Optional

from rdflib import DCTERMS, URIRef, Graph, BNode
from rdflib.resource import Resource

from paradicms_etl.models.dc.dc_model import DcModel
from paradicms_etl.models.license import License


class DcLicenseDocument(DcModel, License):
    """
    A dcterms:LicenceDocument.
    """

    class Builder(DcModel.Builder):
        def build(self) -> "DcLicenseDocument":
            return DcLicenseDocument(self._resource)

        def set_identifier(self, identifier: str) -> "DcLicenseDocument.Builder":
            super().set_identifier(identifier)
            return self

        def set_version(self, version: str) -> "DcLicenseDocument.Builder":
            super().set_version(version)
            return self

    def __init__(self, resource: Resource):
        DcModel.__init__(self, resource)
        self.title

    @classmethod
    def builder(cls, *, title: str, uri: Optional[URIRef] = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else BNode()))
        builder.set_title(title)
        return builder

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return DCTERMS.LicenseDocument

    @property
    def label(self) -> str:
        return self.title

    @property
    def title(self) -> str:
        title = DcModel.title.fget(self)  # type: ignore
        if title is None:
            raise KeyError
        return title