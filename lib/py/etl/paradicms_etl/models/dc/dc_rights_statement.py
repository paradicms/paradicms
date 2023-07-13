from typing import Union, Optional

from rdflib import DCTERMS, URIRef, Graph, SKOS
from rdflib.resource import Resource

from paradicms_etl.models.dc.dc_model import DcModel
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.text import Text
from paradicms_etl.utils.clone_graph import clone_graph
from paradicms_etl.utils.uuid_urn import uuid_urn


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

    @classmethod
    def builder(cls, *, title: str, uri: Optional[URIRef] = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))
        builder.set_title(title)
        return builder

    @classmethod
    def from_rdf(cls, resource: Resource) -> "DcRightsStatement":
        resource_clone = clone_graph(resource.graph).resource(resource.identifier)

        if isinstance(resource.identifier, URIRef):
            if str(resource.identifier).startswith(
                "http://rightsstatements.org/vocab/"
            ):
                if resource.value(SKOS.prefLabel) is not None:
                    from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statement import (
                        RightsStatementsDotOrgRightsStatement,
                    )

                    return RightsStatementsDotOrgRightsStatement(resource_clone)

        return cls(resource_clone)

    @property
    def label(self) -> str:
        return self._required_label

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return DCTERMS.RightsStatement
