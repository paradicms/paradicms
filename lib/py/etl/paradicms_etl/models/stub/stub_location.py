from paradicms_etl.models.location import Location
from paradicms_etl.models.stub.stub_model import StubModel


class StubLocation(StubModel, Location):
    @property
    def centroid(self) -> None:
        return None
