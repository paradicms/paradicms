from rdflib import URIRef

from paradicms_etl.models.stub.stub_images_mixin import StubImagesMixin
from paradicms_etl.models.stub.stub_model import StubModel
from paradicms_etl.models.work import Work


class StubWork(StubModel, StubImagesMixin, Work):
    class Builder:
        pass

    @property
    def created(self) -> None:
        return None

    @property
    def contributors(self) -> tuple[str | URIRef, ...]:
        return ()

    @property
    def creators(self) -> tuple[str | URIRef, ...]:
        return ()

    @property
    def description(self) -> None:
        return None

    @property
    def label(self) -> str:
        raise NotImplementedError(self.__class__.__name__)

    @property
    def modified(self) -> None:
        return None

    def replacer(self) -> Builder:
        raise NotImplementedError(self.__class__.__name__)

    @property
    def spatial(self) -> None:
        return None

    @property
    def subjects(self) -> tuple[str | URIRef, ...]:
        return ()
