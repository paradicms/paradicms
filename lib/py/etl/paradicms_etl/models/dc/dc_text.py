from rdflib import DCMITYPE, DCTERMS, RDF, Graph, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.dc.dc_model import DcModel
from paradicms_etl.models.dc.dc_rights_mixin import DcRightsMixin
from paradicms_etl.models.text import Text
from paradicms_etl.utils.safe_dict_update import safe_dict_update
from paradicms_etl.utils.uuid_urn import uuid_urn


class DcText(DcModel, DcRightsMixin, Text):
    class Builder(DcModel.Builder, DcRightsMixin.Builder):
        def build(self) -> "DcText":
            return DcText(self._resource)

    def __init__(self, resource: Resource):
        DcModel.__init__(self, resource)
        self.value

    @classmethod
    def builder(cls, value: str) -> Builder:
        builder = cls.Builder(Graph().resource(uuid_urn()))
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

    def to_rdf(self, graph: Graph) -> Resource:
        for p in (
            RDF.type,
            RDF.value,
            DCTERMS.contributor,
            DCTERMS.creator,
            DCTERMS.license,
            DCTERMS.rights,
            DCTERMS.rightsHolder,
        ):
            for o in self.resource.graph.objects(subject=self.uri, predicate=p):
                graph.add((self.uri, p, o))
        return graph.resource(self.uri)

    @property
    def value(self) -> str:
        return self._required_value(RDF.value, self._map_term_to_str)
