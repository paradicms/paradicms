from paradicms_etl.models.stub.stub_named_model import StubNamedModel
from paradicms_etl.models.work import Work


class StubWork(StubNamedModel, Work):
    class Builder:
        pass

    @property
    def label(self) -> str:
        raise NotImplementedError(self.__class__.__name__)

    def replacer(self):
        raise NotImplementedError(self.__class__.__name__)
