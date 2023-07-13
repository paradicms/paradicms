from typing import Union

from rdflib import RDFS, URIRef

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.rights_mixin import RightsMixin


class LinkedArtModel(ResourceBackedModel):
    class Builder(ResourceBackedModel.Builder, RightsMixin.Builder):
        def add_contributor(
            self, contributor: Union[str, URIRef]
        ) -> "LinkedArtModel.Builder":
            raise NotImplementedError

        def add_creator(self, creator: Union[str, URIRef]) -> "LinkedArtModel.Builder":
            raise NotImplementedError

        def add_rights_holder(
            self, rights_holder: Union[str, URIRef]
        ) -> "LinkedArtModel.Builder":
            raise NotImplementedError

        def add_rights_statement(
            self, rights_statement: Union[str, URIRef]
        ) -> "LinkedArtModel.Builder":
            raise NotImplementedError

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return RDFS.label
