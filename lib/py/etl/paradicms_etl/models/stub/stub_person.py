from rdflib import URIRef

from paradicms_etl.models.person import Person
from paradicms_etl.models.stub.stub_model import StubModel


class StubPerson(StubModel, Person):
    @property
    def family_name(self) -> str | None:
        return None

    @property
    def given_name(self) -> str | None:
        return None

    @property
    def image_uris(self) -> tuple[URIRef, ...]:
        return ()

    @property
    def label(self) -> str:
        raise NotImplementedError(self.__class__.__name__)
