from pathlib import Path

from paradicms.etl.lib.pipeline._pipeline import _Pipeline
from paradicms.etl.lib.pipeline.file_loader import FileLoader
from paradicms.etl.lib.pipeline.test_data.test_data_extractor import TestDataExtractor
from paradicms.etl.lib.pipeline.test_data.test_data_transformer import TestDataTransformer


class TestDataPipeline(_Pipeline):
    __ID = "test_data"

    def __init__(self, **kwds):
        root_dir_path = Path(__file__).parent.parent.parent.parent.parent.parent.parent
        test_resources_dir_path = root_dir_path / "lib" / "scala" / "generic" / "src" / "test" / "resources"
        assert test_resources_dir_path.is_dir(), test_resources_dir_path
        file_path = test_resources_dir_path / "test_data.ttl"
        _Pipeline.__init__(
            self,
            extractor=TestDataExtractor(),
            id=self.__ID,
            loader=FileLoader(file_path=file_path, pipeline_id=self.__ID),
            transformer=TestDataTransformer(),
            **kwds
        )
