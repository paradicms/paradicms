from typing import Union, Optional

from rdflib import DCTERMS, URIRef, Graph, BNode
from rdflib.resource import Resource

from paradicms_etl.models.dc.dc_model import DcModel
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.text import Text


class DcRightsStatement(DcModel, RightsStatement):
    """
    A dcterms:RightsStatement.
    """

    class Builder(DcModel.Builder):
        def build(self) -> "DcRightsStatement":
            return DcRightsStatement(self._resource)

        def set_description(
            self, description: Union[str, Text]
        ) -> "DcRightsStatement.Builder":
            super().set_description(description)
            return self

    def __init__(self, resource: Resource):
        DcModel.__init__(self, resource)
        self.title

    @classmethod
    def builder(cls, *, title: str, uri: Optional[URIRef] = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else BNode()))
        builder.set_title(title)
        return builder

    @property
    def label(self) -> str:
        return self.identifier

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return DCTERMS.RightsStatement
