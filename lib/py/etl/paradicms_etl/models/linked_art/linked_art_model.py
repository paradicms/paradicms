from typing import Optional, TypeVar, Tuple, List

from rdflib import RDFS, URIRef, RDF
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model import (
    ResourceBackedModel,
    _StatementObject,
)
from paradicms_etl.namespaces import CRM

_LinkedArtModelT = TypeVar("_LinkedArtModelT")


class LinkedArtModel(ResourceBackedModel):
    @classmethod
    def label_property_uri(cls) -> URIRef:
        return RDFS.label

    @staticmethod
    def _map_term_to_linked_art_model(
        term: _StatementObject,
    ) -> Optional["LinkedArtModel"]:  # type: ignore
        if not isinstance(term, Resource):
            return None
        resource: Resource = term
        value_type = resource.value(RDF.type)
        if not isinstance(value_type, Resource):
            return None

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
            LinkedArtInformationObject,
            LinkedArtLinguisticObject,
            LinkedArtRight,
            LinkedArtVisualItem,
        ):
            if value_type.identifier == model_class.rdf_type_uri():
                return model_class.from_rdf(resource)

        return None

    @property
    def p129i_is_subject_of(self) -> Tuple["LinkedArtModel", ...]:  # type: ignore
        """
        The E30 right is the P129 subject of acknowledgments.
        """

        return tuple(
            self._values(
                CRM.P129i_is_subject_of,
                self._map_term_to_linked_art_model,
            )
        )

    @property
    def p2_has_type(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(CRM.P2_has_type, self._map_term_to_uri))

    def p67i_is_referred_to_by(
        self, *, p2_has_type: Optional[URIRef] = None
    ) -> Tuple["LinkedArtModel", ...]:
        models: List[LinkedArtModel] = []
        term: _StatementObject
        for term in self._values(CRM.P67i_is_referred_to_by):
            if not isinstance(term, Resource):
                continue
            resource: Resource = term

            if p2_has_type is not None and not any(
                value_p2_has_type
                for value_p2_has_type in resource.objects(CRM.P2_has_type)
                if (
                    isinstance(value_p2_has_type, Resource)
                    and value_p2_has_type.identifier == p2_has_type
                )
            ):
                # Term doesn't have appropriate p2_has_type, skip
                continue

            model = self._map_term_to_linked_art_model(term)
            if model is not None:
                models.append(model)
        return tuple(models)
