from typing import Union, Tuple, Optional

from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_linguistic_object import (
    LinkedArtLinguisticObject,
)
from paradicms_etl.models.linked_art.linked_art_model_mixin import LinkedArtModelMixin
from paradicms_etl.models.rights_mixin import RightsMixin


class LinkedArtRightsMixin(LinkedArtModelMixin, RightsMixin):
    class Builder(RightsMixin.Builder):
        def add_contributor(
            self, contributor: Union[str, URIRef]
        ) -> "LinkedArtRightsMixin.Builder":
            raise NotImplementedError

        def add_creator(
            self, creator: Union[str, URIRef]
        ) -> "LinkedArtRightsMixin.Builder":
            raise NotImplementedError

        def add_license(
            self, license: Union[str, URIRef]
        ) -> "LinkedArtRightsMixin.Builder":
            raise NotImplementedError

        def add_rights_holder(
            self, holder: Union[str, URIRef]
        ) -> "LinkedArtRightsMixin.Builder":
            raise NotImplementedError

        def add_rights_statement(
            self, statement: Union[str, URIRef]
        ) -> "LinkedArtRightsMixin.Builder":
            raise NotImplementedError

    @property
    def contributors(self) -> Tuple[Union[str, URIRef], ...]:
        return ()

    @property
    def creators(self) -> Tuple[Union[str, URIRef], ...]:
        return ()

    @property
    def description(self) -> Optional[LinkedArtLinguisticObject]:
        for model in self.p67i_is_referred_to_by(
            p2_has_type=URIRef("http://vocab.getty.edu/aat/300080091")
        ):
            if isinstance(model, LinkedArtLinguisticObject):
                return model
        return None

    @property
    def licenses(self) -> Tuple[Union[str, URIRef], ...]:
        description = self.description
        if description:
            return description.licenses
        else:
            return ()

    @property
    def rights_holders(self) -> Tuple[Union[str, URIRef], ...]:
        description = self.description
        if description:
            return description.rights_holders
        else:
            return ()

    @property
    def rights_statements(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(
            model.uri
            for model in self.p67i_is_referred_to_by(
                p2_has_type=URIRef("http://vocab.getty.edu/aat/300417696")
            )
        )
