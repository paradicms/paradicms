from __future__ import annotations

from rdflib import RDF, RDFS, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model import (
    ResourceBackedModel,
    _StatementObject,
)
from paradicms_etl.namespaces import CRM


class LinkedArtModel(ResourceBackedModel):
    class Builder(ResourceBackedModel.Builder):
        def set_label(self, label: str) -> LinkedArtModel.Builder:
            self.set(RDFS.label, label)
            return self

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return RDFS.label

    @staticmethod
    def _map_term_to_linked_art_model(
        term: _StatementObject,
    ) -> LinkedArtModel | None:  # type: ignore  # noqa: PGH003
        if not isinstance(term, Resource):
            return None
        resource: Resource = term
        value_type = resource.value(RDF.type)
        if not isinstance(value_type, Resource):
            return None

        from paradicms_etl.models.linked_art.linked_art_digital_object import (
            LinkedArtDigitalObject,
        )
        from paradicms_etl.models.linked_art.linked_art_information_object import (
            LinkedArtInformationObject,
        )
        from paradicms_etl.models.linked_art.linked_art_linguistic_object import (
            LinkedArtLinguisticObject,
        )
        from paradicms_etl.models.linked_art.linked_art_right import LinkedArtRight
        from paradicms_etl.models.linked_art.linked_art_visual_item import (
            LinkedArtVisualItem,
        )

        for model_class in (
            LinkedArtDigitalObject,
            LinkedArtInformationObject,
            LinkedArtLinguisticObject,
            LinkedArtRight,
            LinkedArtVisualItem,
        ):
            if value_type.identifier == model_class.rdf_type_uri():
                return model_class.from_rdf(resource)  # type: ignore

        return None

    @property
    def has_type(self) -> tuple[URIRef, ...]:
        return tuple(self._values(CRM.P2_has_type, self._map_term_to_uri))

    @property
    def is_referred_to_by(self) -> tuple[LinkedArtModel, ...]:
        return tuple(
            self._values(CRM.P67i_is_referred_to_by, self._map_term_to_linked_art_model)
        )

    @property
    def is_subject_of(self) -> tuple[LinkedArtModel, ...]:
        return tuple(
            self._values(
                CRM.P129i_is_subject_of,
                self._map_term_to_linked_art_model,
            )
        )
