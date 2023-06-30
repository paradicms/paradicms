from rdflib import URIRef, Graph
from rdflib.namespace import DCTERMS
from rdflib.resource import Resource

from paradicms_etl.models.dc.dc_named_model import DcNamedModel
from paradicms_etl.models.work import Work


class DcPhysicalObject(DcNamedModel, Work):
    class Builder(
        DcNamedModel.Builder,
        Work.Builder,
    ):
        def build(self) -> "DcPhysicalWork":
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

    def replacer(self) -> Builder:
        return self.Builder(self._resource)

    @property
    def title(self) -> str:
        return self._required_value(DCTERMS.title, self._map_str_value)

    @property
    def uri(self) -> URIRef:
        return super().uri
