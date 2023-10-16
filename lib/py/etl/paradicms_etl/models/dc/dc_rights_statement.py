from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib import DCTERMS, SKOS, Graph, URIRef

from paradicms_etl.models.dc.dc_model import DcModel
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.utils.clone_graph import clone_graph
from paradicms_etl.utils.match_url import match_url
from paradicms_etl.utils.uuid_urn import uuid_urn

if TYPE_CHECKING:
    from rdflib.resource import Resource

    from paradicms_etl.models.text import Text


class DcRightsStatement(DcModel, RightsStatement):
    """
    A dcterms:RightsStatement.
    """

    class Builder(DcModel.Builder):
        def build(self) -> DcRightsStatement:
            return DcRightsStatement(self._resource)

        def set_description(self, description: str | Text) -> DcRightsStatement.Builder:
            super().set_description(description)
            return self

    @classmethod
    def builder(cls, *, title: str, uri: URIRef | None = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))
        builder.set_title(title)
        return builder

    @classmethod
    def from_rdf(cls, resource: Resource) -> DcRightsStatement:
        resource_clone = clone_graph(resource.graph).resource(resource.identifier)

        if (
            isinstance(resource.identifier, URIRef)
            and match_url(
                resource.identifier,
                match_netloc="rightsstatements.org",
                match_path_prefix="/vocab/",
            )
            and resource.value(SKOS.prefLabel) is not None
        ):
            from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statement import (
                RightsStatementsDotOrgRightsStatement,
            )

            return RightsStatementsDotOrgRightsStatement(resource_clone)

        return cls(resource_clone)

    @classmethod
    def from_rights_statement(
        cls, rights_statement: RightsStatement
    ) -> DcRightsStatement:
        if isinstance(rights_statement, DcRightsStatement):
            return rights_statement

        return cls.builder(
            title=rights_statement.label, uri=rights_statement.uri
        ).build()

    @property
    def label(self) -> str:
        return self._required_label

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return DCTERMS.title

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return DCTERMS.RightsStatement
