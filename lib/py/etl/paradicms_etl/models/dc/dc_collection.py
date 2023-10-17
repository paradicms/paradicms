from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib import DCMITYPE, DCTERMS, Graph, URIRef

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.dc.dc_images_mixin import DcImagesMixin
from paradicms_etl.models.dc.dc_model import DcModel

if TYPE_CHECKING:
    from paradicms_etl.models.text import Text


class DcCollection(DcModel, DcImagesMixin, Collection):
    class Builder(DcModel.Builder, DcImagesMixin.Builder, Collection.Builder):
        def add_work(self, work: URIRef) -> DcCollection.Builder:
            # dcterms:hasPart is only supposed to be for sub-collections, hi-jacking it here
            self.add(DCTERMS.hasPart, work)
            return self

        def build(self) -> DcCollection:
            return DcCollection(self._resource)

    def __init__(self, *args, **kwds):
        DcModel.__init__(self, *args, **kwds)
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
        return DCMITYPE.Collection

    def replacer(self) -> Builder:
        return self.Builder(self.resource)

    @property
    def work_uris(self) -> tuple[URIRef, ...]:
        return tuple(self._values(DCTERMS.hasPart, self._map_term_to_uri))
