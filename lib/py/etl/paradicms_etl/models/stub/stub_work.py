from paradicms_etl.models.stub.stub_images_mixin import StubImagesMixin
from paradicms_etl.models.stub.stub_model import StubModel
from paradicms_etl.models.work import Work


class StubWork(StubModel, StubImagesMixin, Work):
    class Builder:
        pass

    @property
    def description(self):
        return None

    @property
    def label(self) -> str:
        raise NotImplementedError(self.__class__.__name__)

    def replacer(self):
        raise NotImplementedError(self.__class__.__name__)
