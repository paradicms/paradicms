from pathlib import Path

from paradicms_etl._pipeline import _Pipeline
from paradicms_etl.extractors.nop_extractor import NopExtractor
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.pipelines.generic_test_data.generic_test_data_transformer import GenericTestDataTransformer


class GenericTestDataPipeline(_Pipeline):
    __ID = "test_data"

    def __init__(self, **kwds):
        root_dir_path = Path(__file__).absolute().parent.parent.parent.parent.parent
        resources_dir_path = root_dir_path / "lib" / "scala" / "generic" / "src" / "main" / "resources"
        assert resources_dir_path.is_dir(), resources_dir_path
        file_path = resources_dir_path / "generic_test_data.ttl"
        _Pipeline.__init__(
            self,
            extractor=NopExtractor(),
            id=self.__ID,
            loader=RdfFileLoader(file_path=file_path, pipeline_id=self.__ID),
            transformer=GenericTestDataTransformer(),
            **kwds
        )


if __name__ == "__main__":
    GenericTestDataPipeline.main()
