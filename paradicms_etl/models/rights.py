from typing import Optional, Union, Tuple

from rdflib import URIRef, DCTERMS, BNode, Literal
from rdflib.resource import Resource

from paradicms_etl.model import Model


class Rights(Model):
    """
    Captures a group of properties that specify the rights of another model,
    such as the license and the rights statement.
    """

    def __init__(self, resource: Resource):
        Model.__init__(self, resource, add_rdf_type=False)

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
        return cls(resource=resource_builder.build())

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

    def to_rdf(self, *, add_to_resource: Resource) -> None:
        for p, o in self._resource.predicate_objects():
            if isinstance(o, Resource):
                o_value = o.identifier
            else:
                assert isinstance(o, Literal)
                o_value = o
            add_to_resource.add(p.identifier, o_value)
