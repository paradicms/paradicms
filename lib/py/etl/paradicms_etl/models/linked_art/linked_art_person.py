from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_images_mixin import LinkedArtImagesMixin
from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.models.person import Person
from paradicms_etl.namespaces.crm import CRM


class LinkedArtPerson(LinkedArtModel, LinkedArtImagesMixin, Person):
    class Builder(LinkedArtModel.Builder, Person.Builder):
        pass

    @property
    def family_name(self) -> None:
        return None

    @property
    def given_name(self) -> None:
        return None

    @property
    def label(self) -> str:
        return self._required_label

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E21_Person
