from pathlib import Path

from paradicms_etl._pipeline import _Pipeline
from paradicms_etl.extractors.nop_extractor import NopExtractor
from paradicms_etl.loaders.composite_loader import CompositeLoader
from paradicms_etl.loaders.json_directory_loader import JsonDirectoryLoader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.pipelines.generic_test_data.generic_test_data_transformer import GenericTestDataTransformer


class GenericTestDataPipeline(_Pipeline):
    __ID = "test_data"

    def __init__(self, **kwds):
        root_dir_path = Path(__file__).absolute().parent.parent.parent.parent.parent
        _Pipeline.__init__(
            self,
            extractor=NopExtractor(),
            id=self.__ID,
            loader=CompositeLoader(
                loaders=(
                    RdfFileLoader(file_path=root_dir_path / "lib" / "scala" / "generic" / "src" / "main" / "resources" / "generic_test_data.ttl", pipeline_id=self.__ID),
                    JsonDirectoryLoader(
                        clean=True,
                        gatsby_js=True,
                        pipeline_id=self.__ID,
                        root_directory_path=root_dir_path / "gui" / "generic" / "src" / "data" / "test"
                    )
                ),
                pipeline_id=self.__ID
            ),
            transformer=GenericTestDataTransformer(),
            **kwds
        )


if __name__ == "__main__":
    GenericTestDataPipeline.main()
