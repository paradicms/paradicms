from pathlib import Path

from paradicms_etl._pipeline import _Pipeline
from paradicms_etl.extractors.nop_extractor import NopExtractor
from paradicms_etl.loaders.composite_loader import CompositeLoader
from paradicms_etl.loaders.json_directory_loader import JsonDirectoryLoader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.pipelines.test_data.test_data_transformer import TestDataTransformer


class TestDataPipeline(_Pipeline):
    __ID = "test_data"

    def __init__(self, **kwds):
        root_dir_path = Path(__file__).absolute().parent.parent.parent.parent.parent
        _Pipeline.__init__(
            self,
            extractor=NopExtractor(),
            id=self.__ID,
            loader=CompositeLoader(
                loaders=(
                    JsonDirectoryLoader(
                        clean=True,
                        pipeline_id=self.__ID,
                        root_directory_path=root_dir_path / "gui" / "generic" / "src" / "data" / "test",
                        strategy=JsonDirectoryLoader.Strategy.FILE_PER_MODEL_TYPE
                    ),
                    JsonDirectoryLoader(
                        clean=True,
                        pipeline_id=self.__ID,
                        root_directory_path=root_dir_path / "integration" / "generic" / "cypress" / "fixtures",
                        strategy=JsonDirectoryLoader.Strategy.FILE_PER_MODEL_TYPE
                    ),
                ),
                pipeline_id=self.__ID
            ),
            transformer=TestDataTransformer(),
            **kwds
        )


if __name__ == "__main__":
    TestDataPipeline.main()
