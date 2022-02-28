from dataclasses import dataclass
from typing import Optional, Union, Tuple

from rdflib import Literal, URIRef, DCTERMS
from rdflib.resource import Resource
from rdflib.term import Node

from paradicms_etl.model import Model


@dataclass(frozen=True)
class Rights(Model):
    """
    Captures a group of properties that specify the rights of another model,
    such as the license and the rights statement.

    Rights typically has the Resource of another Model.
    """

    # def __init__(self, resource: Resource):
    #     Model.__init__(self, resource)
    #     self.contributors
    #     self.creators
    #     self.holders
    #     self.license
    #     self.statement

    @classmethod
    def from_fields(
        cls,
        *,
        contributor: Optional[str, URIRef] = None,
        contributors: Optional[Tuple[Union[str, URIRef], ...]] = None,
        creator: Optional[str, URIRef] = None,
        creators: Optional[Tuple[Union[str, URIRef], ...]] = None,
        holder: Optional[str, URIRef] = None,
        holders: Optional[Tuple[Union[str, URIRef], ...]] = None,
        license: Union[str, URIRef, None] = None,
        statement: Union[str, URIRef, None] = None,
    ):
        from paradicms_etl.utils.resource_builder import ResourceBuilder

        resource_builder = ResourceBuilder()
        for singular, plural, property_uri in (
            (contributor, contributors, DCTERMS.contributor),
            (creator, creators, DCTERMS.creator),
            (holder, holders, DCTERMS.rightsHolder),
            (license, None, DCTERMS.license),
            (statement, None, DCTERMS.rights),
        ):
            if singular is not None:
                resource_builder.add(property_uri, singular)
            if plural is not None:
                for value in plural:
                    resource_builder.add(property_uri, value)
        return resource_builder.build()

    def to_rdf(self, *, add_to_resource: Resource) -> None:
        for p, o in self._resource.predicate_objects():
            add_to_resource.add(p, o)
