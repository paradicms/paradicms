from paradicms_etl.models.linked_art.linked_art_linguistic_appellation import (
    LinkedArtLinguisticAppellation,
)
from paradicms_etl.models.linked_art.linked_art_model_mixin import LinkedArtModelMixin
from paradicms_etl.namespaces.crm import CRM


class LinkedArtIsIdentifiedByMixin(LinkedArtModelMixin):
    @property
    def is_identified_by(
        self,
    ) -> tuple[LinkedArtLinguisticAppellation, ...]:
        return tuple(  # type: ignore
            value
            for value in self._values(
                CRM.P1_is_identified_by, self._map_term_to_linked_art_model
            )
            if isinstance(value, LinkedArtLinguisticAppellation)
        )
