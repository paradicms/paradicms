from typing import Union, Tuple, Any, Optional

from rdflib import URIRef, DCTERMS

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin
from paradicms_etl.models.rights_mixin import RightsMixin


class CmsRightsMixin(ResourceBackedModelMixin, RightsMixin):
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

    class Builder(ResourceBackedModelMixin.Builder, RightsMixin.Builder):
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
            if other.rights_statement:
                self.add_rights_statement(other.rights_statement)
            return self

    @property
    def contributors(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(
            self._values(DCTERMS.contributor, ResourceBackedModel._map_str_or_uri_value)
        )

    @property
    def creators(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(
            self._values(DCTERMS.creator, ResourceBackedModel._map_str_or_uri_value)
        )

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
        return self._optional_value(DCTERMS.license, self._map_uri_value)

    @property
    def rights_holders(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(DCTERMS.rightsHolder, self._map_str_or_uri_value))

    @property
    def rights_statement(self) -> Union[str, URIRef, None]:
        return self._optional_value(DCTERMS.rights, self._map_str_or_uri_value)

    @property
    def source(self) -> Optional[URIRef]:
        return self._optional_value(DCTERMS.source, self._map_uri_value)
