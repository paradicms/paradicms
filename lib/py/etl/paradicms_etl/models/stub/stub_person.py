from typing import Tuple

from paradicms_etl.models.stub.stub_model import StubModel
from rdflib import URIRef

from paradicms_etl.models.person import Person


class StubPerson(StubModel, Person):
    @property
    def image_uris(self) -> Tuple[URIRef, ...]:
        return ()

    @property
    def label(self) -> str:
        raise NotImplementedError(self.__class__.__name__)
