from typing import Tuple, Union, Optional

from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_linguistic_object import (
    LinkedArtLinguisticObject,
)
from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.models.work import Work
from paradicms_etl.namespaces import CRM


class LinkedArtHumanMadeObject(LinkedArtModel, Work):
    class Builder(LinkedArtModel.Builder, Work.Builder):
        def add_contributor(
            self, contributor: Union[str, URIRef]
        ) -> "LinkedArtHumanMadeObject.Builder":
            raise NotImplementedError

        def add_creator(
            self, creator: Union[str, URIRef]
        ) -> "LinkedArtHumanMadeObject.Builder":
            raise NotImplementedError

        def add_image(self, image: URIRef) -> "LinkedArtHumanMadeObject.Builder":
            raise NotImplementedError

        def add_license(
            self, license: Union[str, URIRef]
        ) -> "LinkedArtHumanMadeObject.Builder":
            raise NotImplementedError

        def add_rights_holder(
            self, holder: Union[str, URIRef]
        ) -> "LinkedArtHumanMadeObject.Builder":
            raise NotImplementedError

        def add_rights_statement(
            self, statement: Union[str, URIRef]
        ) -> "LinkedArtHumanMadeObject.Builder":
            raise NotImplementedError

        def build(self) -> "LinkedArtHumanMadeObject":
            return LinkedArtHumanMadeObject(self._resource)

    @property
    def contributors(self) -> Tuple[Union[str, URIRef], ...]:
        return ()

    @property
    def description(self) -> Optional[LinkedArtLinguisticObject]:
        for resource in self._p67i_is_referred_to_by(
            p2_has_type=URIRef("http://vocab.getty.edu/aat/300080091")
        ):
            return LinkedArtLinguisticObject.from_rdf(resource)
        return None

    @property
    def creators(self) -> Tuple[Union[str, URIRef], ...]:
        return ()

    @property
    def image_uris(self) -> Tuple[URIRef, ...]:
        return ()

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
            resource.identifier
            for resource in self._p67i_is_referred_to_by(
                p2_has_type=URIRef("http://vocab.getty.edu/aat/300417696")
            )
        )

    @property
    def label(self) -> str:
        return self._required_label

    def replacer(self) -> Builder:
        return self.Builder(self._resource)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM["E22_Human-Made_Object"]
