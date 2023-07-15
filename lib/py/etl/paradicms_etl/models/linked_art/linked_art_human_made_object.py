from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_images_mixin import LinkedArtImagesMixin
from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.models.linked_art.linked_art_rights_mixin import LinkedArtRightsMixin
from paradicms_etl.models.work import Work
from paradicms_etl.namespaces import CRM


class LinkedArtHumanMadeObject(
    LinkedArtModel, LinkedArtImagesMixin, LinkedArtRightsMixin, Work
):
    class Builder(
        LinkedArtModel.Builder,
        LinkedArtImagesMixin.Builder,
        LinkedArtRightsMixin.Builder,
        Work.Builder,
    ):
        def build(self) -> "LinkedArtHumanMadeObject":
            return LinkedArtHumanMadeObject(self._resource)

    @property
    def label(self) -> str:
        return self._required_label

    def replacer(self) -> Builder:
        return self.Builder(self._resource)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM["E22_Human-Made_Object"]
