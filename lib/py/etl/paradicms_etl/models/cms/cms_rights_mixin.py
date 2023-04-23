from abc import abstractmethod
from typing import Union, Tuple, Any

from rdflib import URIRef, DCTERMS, Literal
from rdflib.resource import Resource

from paradicms_etl.models.rights_mixin import RightsMixin


class CmsRightsMixin(RightsMixin):
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

    class Builder:
        @abstractmethod
        def add(self, p: URIRef, o: Any):
            raise NotImplementedError

        def add_contributor(self, contributor: Any) -> "CmsRightsMixin.Builder":
            self.add(DCTERMS.contributor, contributor)
            return self

        def add_creator(self, creator: Any) -> "CmsRightsMixin.Builder":
            self.add(DCTERMS.creator, creator)
            return self

        def add_license(self, license: Any) -> "CmsRightsMixin.Builder":
            self.add(DCTERMS.license, license)
            return self

        def add_rights_holder(self, holder: Any) -> "CmsRightsMixin.Builder":
            self.add(DCTERMS.rightsHolder, holder)
            return self

        def add_rights_statement(self, statement: Any) -> "CmsRightsMixin.Builder":
            self.add(DCTERMS.rights, statement)
            return self

        def copy_rights(self, other: RightsMixin) -> "CmsRightsMixin.Builder":
            for contributor in other.contributors:
                self.add_contributor(contributor)
            for creator in other.creators:
                self.add_creator(creator)
            for holder in other.rights_holders:
                self.add_rights_holder(holder)
            if other.license:
                self.add_license(other.license)
            if other.statement:
                self.add_rights_statement(other.statement)
            return self

    @property
    def contributors(self) -> Tuple[Any, ...]:
        return self.__plural_values(DCTERMS.contributor)

    @property
    def creators(self) -> Tuple[Any, ...]:
        return self.__plural_values(DCTERMS.creator)

    @property
    def rights_holders(self) -> Tuple[Any, ...]:
        return self.__plural_values(DCTERMS.rightsHolder)

    @classmethod
    def json_ld_context(cls):
        context = (
            {}
        )  # Don't use the superclass, since Rights is often merged into other JSON-LD contexts
        for property_uri in cls.__PROPERTY_URIS:
            assert str(property_uri).startswith(str(DCTERMS))
            context[str(property_uri)[len(str(DCTERMS)) :]] = {
                "@id": str(property_uri),
                "@type": "@id",
            }
            context[str(property_uri)[len(str(DCTERMS)) :] + "Literal"] = {
                "@id": str(property_uri)
            }
        return context

    @property
    def license(self) -> Union[str, URIRef, None]:
        return self.__singular_value(DCTERMS.license)

    def __plural_values(self, p: URIRef) -> Tuple[Any, ...]:
        values = []
        for o in self._resource.objects(p):
            if isinstance(o, Literal):
                py_o = o.toPython()
                if isinstance(py_o, str):
                    values.append(py_o)
            elif isinstance(o, Resource):
                if isinstance(o.identifier, URIRef):
                    values.append(o.identifier)
                else:
                    # raise NotImplementedError("blank node")
                    continue
        return tuple(values)

    @property
    @abstractmethod
    def _resource(self) -> Resource:
        raise NotImplementedError

    def __singular_value(self, p: URIRef) -> Union[str, URIRef, None]:
        values = self.__plural_values(p)
        return values[0] if values else None

    @property
    def statement(self) -> Union[str, URIRef, None]:
        return self.__singular_value(DCTERMS.rights)
