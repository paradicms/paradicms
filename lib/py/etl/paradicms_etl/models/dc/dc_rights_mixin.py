from rdflib import DCTERMS, URIRef

from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin
from paradicms_etl.models.rights_mixin import RightsMixin


class DcRightsMixin(ResourceBackedModelMixin, RightsMixin):
    class Builder(ResourceBackedModelMixin.Builder, RightsMixin.Builder):
        def add_contributor(self, contributor: str | URIRef) -> "DcRightsMixin.Builder":
            self.add(DCTERMS.contributor, contributor)
            return self

        def add_creator(self, creator: str | URIRef) -> "DcRightsMixin.Builder":
            self.add(DCTERMS.creator, creator)
            return self

        def add_license(self, license_: str | URIRef) -> "DcRightsMixin.Builder":
            self.add(DCTERMS.license, license_)
            return self

        def add_rights_holder(self, holder: str | URIRef) -> "DcRightsMixin.Builder":
            self.add(DCTERMS.rightsHolder, holder)
            return self

        def add_rights_statement(
            self, rights_statement: str | URIRef
        ) -> "DcRightsMixin.Builder":
            self.add(DCTERMS.rights, rights_statement)
            return self

    @property
    def contributors(self) -> tuple[str | URIRef, ...]:
        return tuple(self._values(DCTERMS.contributor, self._map_term_to_str_or_uri))

    @property
    def creators(self) -> tuple[str | URIRef, ...]:
        return tuple(self._values(DCTERMS.creator, self._map_term_to_str_or_uri))

    @property
    def licenses(self) -> tuple[str | URIRef, ...]:
        return tuple(self._values(DCTERMS.license, self._map_term_to_uri))

    @property
    def rights_holders(self) -> tuple[str | URIRef, ...]:
        return tuple(self._values(DCTERMS.rightsHolder, self._map_term_to_str_or_uri))

    @property
    def rights_statements(self) -> tuple[str | URIRef, ...]:
        return tuple(self._values(DCTERMS.rights, self._map_term_to_str_or_uri))
