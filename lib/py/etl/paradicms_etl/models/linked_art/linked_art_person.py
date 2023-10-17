from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.models.person import Person
from paradicms_etl.namespaces.crm import CRM


class LinkedArtPerson(LinkedArtModel, Person):
    class Builder(LinkedArtModel.Builder, Person.Builder):
        pass

    def label(self) -> str:
        return self._required_label

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E21_Person
