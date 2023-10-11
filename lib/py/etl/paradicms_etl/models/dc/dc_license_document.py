from __future__ import annotations

from rdflib import DCTERMS, Graph, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.dc.dc_model import DcModel
from paradicms_etl.models.license import License
from paradicms_etl.utils.uuid_urn import uuid_urn


class DcLicenseDocument(DcModel, License):
    """
    A dcterms:LicenceDocument.
    """

    class Builder(DcModel.Builder):
        def build(self) -> DcLicenseDocument:
            return DcLicenseDocument(self._resource)

        def set_identifier(self, identifier: str) -> DcLicenseDocument.Builder:
            self.set(DCTERMS.identifier, identifier)
            return self

        def set_version(self, version: str) -> DcLicenseDocument.Builder:
            self.set(DCTERMS.hasVersion, version)
            return self

    def __init__(self, resource: Resource):
        DcModel.__init__(self, resource)
        self.label  # noqa: B018

    @classmethod
    def builder(cls, *, title: str, uri: URIRef | None = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))
        builder.set_title(title)
        return builder

    @classmethod
    def from_license(cls, license_: License) -> DcLicenseDocument:
        if isinstance(license_, DcLicenseDocument):
            return license_

        return cls.builder(title=license_.label, uri=license_.uri).build()

    @property
    def label(self) -> str:
        return self._required_label

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return DCTERMS.title

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return DCTERMS.LicenseDocument
