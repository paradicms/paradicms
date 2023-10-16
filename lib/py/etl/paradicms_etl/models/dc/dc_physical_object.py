from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib import DCMITYPE, DCTERMS, Graph, URIRef

from paradicms_etl.models.dc.dc_images_mixin import DcImagesMixin
from paradicms_etl.models.dc.dc_model import DcModel
from paradicms_etl.models.work import Work

if TYPE_CHECKING:
    from rdflib.resource import Resource

    from paradicms_etl.models.location import Location
    from paradicms_etl.models.text import Text


class DcPhysicalObject(DcModel, DcImagesMixin, Work):
    class Builder(
        DcModel.Builder,
        DcImagesMixin.Builder,
        Work.Builder,
    ):
        def add_alternative(self, alternative: str) -> DcPhysicalObject.Builder:
            self.add(DCTERMS.alternative, alternative)
            return self

        def add_contributor(
            self, contributor: str | URIRef
        ) -> DcPhysicalObject.Builder:
            self.add(DCTERMS.contributor, contributor)
            return self

        def add_creator(self, creator: str | URIRef) -> DcPhysicalObject.Builder:
            self.add(DCTERMS.creator, creator)
            return self

        def add_identifier(self, identifier: str) -> DcPhysicalObject.Builder:
            self.add(DCTERMS.identifier, identifier)
            return self

        def add_provenance(self, provenance: str) -> DcPhysicalObject.Builder:
            self.add(DCTERMS.provenance, provenance)
            return self

        def add_spatial(
            self, spatial: str | Location | URIRef
        ) -> DcPhysicalObject.Builder:
            self.add(DCTERMS.spatial, spatial)
            return self

        def build(self) -> DcPhysicalObject:
            return DcPhysicalObject(self._resource)

    def __init__(self, resource: Resource):
        DcModel.__init__(self, resource)
        self.label

    @classmethod
    def builder(cls, *, title: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set_title(title)
        return builder

    @property
    def description(self) -> str | Text | None:
        return self._optional_value(DCTERMS.description, self._map_term_to_str_or_text)  # type: ignore

    @property
    def label(self) -> str:
        return self._required_label

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return DCMITYPE.PhysicalObject

    def replacer(self) -> Builder:
        return self.Builder(self.resource)
