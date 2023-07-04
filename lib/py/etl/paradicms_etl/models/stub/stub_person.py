from typing import Tuple

from rdflib import URIRef

from paradicms_etl.models.person import Person
from paradicms_etl.models.stub.stub_named_model import StubNamedModel


class StubPerson(StubNamedModel, Person):
    @property
    def image_uris(self) -> Tuple[URIRef, ...]:
        return ()

    @property
    def label(self) -> str:
        raise NotImplementedError(self.__class__.__name__)
