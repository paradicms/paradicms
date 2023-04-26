from pathlib import Path

from paradicms_etl.extractors.omeka_classic_extractor import OmekaClassicExtractor
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.vccc_transformer import VcccTransformer


class VcccPipeline(Pipeline):
    __ID = "vccc"

    def __init__(self, *, data_dir_path: Path, omeka_api_key: str):
        Pipeline.__init__(
            self,
            extractor=OmekaClassicExtractor(
                api_key=omeka_api_key,
                cache_dir_path=self._cache_dir_path(
                    data_dir_path=data_dir_path, pipeline_id=self.__ID
                )
                / "omeka-classic",
                endpoint_url="https://vccc.vassarspaces.net/",
            ),
            id=self.__ID,
            loader=RdfFileLoader(
                rdf_file_path=data_dir_path / self.__ID / "loaded" / "vccc.trig",
            ),
            transformer=VcccTransformer(),
        )

    @classmethod
    def add_arguments(cls, arg_parser):
        Pipeline.add_arguments(arg_parser)
        cls._add_data_dir_path_argument(arg_parser)
        arg_parser.add_argument("--omeka-api-key", help="Omeka API key", required=True)


if __name__ == "__main__":
    VcccPipeline.main()
