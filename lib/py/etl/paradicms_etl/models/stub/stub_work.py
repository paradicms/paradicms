from paradicms_etl.models.stub.stub_model import StubModel

from paradicms_etl.models.stub.stub_images_mixin import StubImagesMixin
from paradicms_etl.models.stub.stub_rights_mixin import StubRightsMixin
from paradicms_etl.models.work import Work


class StubWork(StubModel, StubImagesMixin, StubRightsMixin, Work):
    class Builder:
        pass

    @property
    def label(self) -> str:
        raise NotImplementedError(self.__class__.__name__)

    def replacer(self):
        raise NotImplementedError(self.__class__.__name__)
