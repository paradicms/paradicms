from rdflib import RDF, Graph, BNode, URIRef, DCMITYPE
from rdflib.resource import Resource

from paradicms_etl.models.dc.dc_model import DcModel
from paradicms_etl.models.text import Text
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class DcText(DcModel, Text):
    class Builder(DcModel.Builder):
        def build(self) -> "DcText":
            return DcText(self._resource)

    def __init__(self, resource: Resource):
        DcModel.__init__(self, resource)
        self.value

    @classmethod
    def builder(cls, value: str) -> Builder:
        builder = cls.Builder(Graph().resource(BNode()))
        builder.add(RDF.value, value)
        return builder

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            DcModel.json_ld_context(),
            {
                "value": {"@id": str(RDF.value)},
            },
        )

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return DCMITYPE.Text

    @property
    def value(self) -> str:
        return self._required_value(RDF.value, self._map_str_value)
