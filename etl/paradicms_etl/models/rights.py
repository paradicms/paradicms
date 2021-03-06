from typing import Optional, Union, Tuple

from rdflib import URIRef, DCTERMS, BNode, Literal, Graph
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model import ResourceBackedModel


class Rights(ResourceBackedModel):
    """
    Captures a group of properties that specify the rights of another model,
    such as the license and the rights statement.
    """

    __PROPERTY_URIS = {
        DCTERMS.contributor,
        DCTERMS.creator,
        DCTERMS.license,
        DCTERMS.rights,
        DCTERMS.rightsHolder,
    }

    @property
    def contributors(self) -> Tuple[Union[str, URIRef], ...]:
        return self.__plural_values(DCTERMS.contributor)

    @property
    def creators(self) -> Tuple[Union[str, URIRef], ...]:
        return self.__plural_values(DCTERMS.creator)

    @classmethod
    def from_fields(
        cls,
        *,
        contributor: Union[str, URIRef, None] = None,
        contributors: Optional[Tuple[Union[str, URIRef], ...]] = None,
        creator: Union[str, URIRef, None] = None,
        creators: Optional[Tuple[Union[str, URIRef], ...]] = None,
        holder: Union[str, URIRef, None] = None,
        holders: Optional[Tuple[Union[str, URIRef], ...]] = None,
        license: Union[str, URIRef, None] = None,
        statement: Union[str, URIRef, None] = None,
    ):
        from paradicms_etl.utils.resource_builder import ResourceBuilder

        resource_builder = ResourceBuilder(BNode())

        fields = (
            (contributor, contributors, DCTERMS.contributor),
            (creator, creators, DCTERMS.creator),
            (holder, holders, DCTERMS.rightsHolder),
            (license, None, DCTERMS.license),
            (statement, None, DCTERMS.rights),
        )
        assert len(fields) == len(cls.__PROPERTY_URIS)
        for singular, plural, property_uri in fields:
            assert property_uri in cls.__PROPERTY_URIS
            if singular is not None:
                resource_builder.add(property_uri, singular)
            if plural is not None:
                for value in plural:
                    resource_builder.add(property_uri, value)
        return cls(resource_builder.build())

    @property
    def holders(self) -> Tuple[Union[str, URIRef], ...]:
        return self.__plural_values(DCTERMS.rightsHolder)

    @property
    def license(self) -> Union[str, URIRef, None]:
        return self.__singular_value(DCTERMS.license)

    def __plural_values(self, p: URIRef) -> Tuple[Union[str, URIRef], ...]:
        values = []
        for o in self._resource.objects(p):
            if isinstance(o, Literal):
                py_o = o.toPython()
                if isinstance(py_o, str):
                    values.append(py_o)
            elif isinstance(o, Resource):
                values.append(o.identifier)
        return tuple(values)

    def __singular_value(self, p: URIRef) -> Union[str, URIRef, None]:
        values = self.__plural_values(p)
        return values[0] if values else None

    @property
    def statement(self) -> Union[str, URIRef, None]:
        return self.__singular_value(DCTERMS.rights)

    def to_rdf(self, graph: Graph) -> Resource:
        resource = graph.resource(BNode())
        for p, o in self._resource.predicate_objects():
            if p.identifier not in self.__PROPERTY_URIS:
                # Since the resource may belong to another model, carefully filter the properties
                continue

            if isinstance(o, Resource):
                o_value = o.identifier
            else:
                assert isinstance(o, Literal)
                o_value = o
            resource.add(p.identifier, o_value)
        return resource
