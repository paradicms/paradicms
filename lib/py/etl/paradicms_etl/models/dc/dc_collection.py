from typing import Union, Tuple

from rdflib import URIRef, Graph, DCMITYPE
from rdflib.namespace import DCTERMS

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.dc.dc_images_mixin import DcImagesMixin
from paradicms_etl.models.dc.dc_named_model import DcNamedModel
from paradicms_etl.models.work import Work


class DcCollection(DcNamedModel, DcImagesMixin, Collection):
    class Builder(DcNamedModel.Builder, DcImagesMixin.Builder, Collection.Builder):
        def add_work(self, work: Union[Work, URIRef]) -> "DcCollection.Builder":
            # dcterms:hasPart is only supposed to be for sub-collections, hi-jacking it here
            self.add_part(work)
            return self

        def build(self) -> "DcCollection":
            return DcCollection(self._resource)

    def __init__(self, *args, **kwds):
        DcNamedModel.__init__(self, *args, **kwds)
        self.label

    @classmethod
    def builder(cls, *, title: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set_title(title)
        return builder

    @property
    def label(self) -> str:
        return self._required_label

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return DCMITYPE.Collection

    def replacer(self) -> Builder:
        return self.Builder(self._resource)

    @property
    def uri(self) -> URIRef:
        return super().uri

    @property
    def work_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(DCTERMS.hasPart, self._map_uri_value))
