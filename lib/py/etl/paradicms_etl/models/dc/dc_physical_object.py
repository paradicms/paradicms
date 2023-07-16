from typing import Union

from rdflib import URIRef, Graph, DCMITYPE
from rdflib.resource import Resource

from paradicms_etl.models.dc.dc_images_mixin import DcImagesMixin
from paradicms_etl.models.dc.dc_model import DcModel
from paradicms_etl.models.text import Text
from paradicms_etl.models.work import Work


class DcPhysicalObject(DcModel, DcImagesMixin, Work):
    class Builder(
        DcModel.Builder,
        DcImagesMixin.Builder,
        Work.Builder,
    ):
        def build(self) -> "DcPhysicalObject":
            return DcPhysicalObject(self._resource)

    def __init__(self, resource: Resource):
        DcModel.__init__(self, resource)
        self.label

    @classmethod
    def builder(cls, *, title: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set_title(title)
        return builder

    def description(self) -> Union[str, Text, None]:
        return super().description

    @property
    def label(self) -> str:
        return self._required_label

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return DCMITYPE.PhysicalObject

    def replacer(self) -> Builder:
        return self.Builder(self._resource)
