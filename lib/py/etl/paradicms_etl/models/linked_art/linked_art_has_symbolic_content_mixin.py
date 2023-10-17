from rdflib import Literal

from paradicms_etl.models.linked_art.linked_art_model_mixin import LinkedArtModelMixin
from paradicms_etl.namespaces.crm import CRM


class LinkedArtHasSymbolicContentMixin(LinkedArtModelMixin):
    @property
    def has_symbolic_content(self) -> tuple[Literal, ...]:
        return tuple(
            self._values(CRM.P190_has_symbolic_content, self._map_term_to_literal)
        )
