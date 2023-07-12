from paradicms_etl.models.stub.stub_model import StubModel

from paradicms_etl.models.image import Image
from paradicms_etl.models.stub.stub_rights_mixin import StubRightsMixin


class StubImage(StubModel, StubRightsMixin, Image):
    def copyable(self) -> bool:
        raise NotImplementedError(self.__class__.__name__)

    def replacer(self):
        raise NotImplementedError(self.__class__)

    @property
    def src(self):
        return None

    @property
    def thumbnail_uris(self):
        return ()
