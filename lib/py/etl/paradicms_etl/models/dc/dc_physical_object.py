from rdflib import URIRef, Graph, DCMITYPE
from rdflib.namespace import DCTERMS
from rdflib.resource import Resource

from paradicms_etl.models.dc.dc_images_mixin import DcImagesMixin
from paradicms_etl.models.dc.dc_named_model import DcNamedModel
from paradicms_etl.models.work import Work


class DcPhysicalObject(DcNamedModel, DcImagesMixin, Work):
    class Builder(
        DcNamedModel.Builder,
        DcImagesMixin.Builder,
        Work.Builder,
    ):
        def build(self) -> "DcPhysicalObject":
            return DcPhysicalObject(self._resource)

    def __init__(self, resource: Resource):
        DcNamedModel.__init__(self, resource)
        self.title

    @classmethod
    def builder(cls, *, title: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set_title(title)
        return builder

    @property
    def label(self) -> str:
        return self.title

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return DCMITYPE.PhysicalObject

    def replacer(self) -> Builder:
        return self.Builder(self._resource)

    @property
    def title(self) -> str:
        return self._required_value(DCTERMS.title, self._map_str_value)

    @property
    def uri(self) -> URIRef:
        return super().uri
