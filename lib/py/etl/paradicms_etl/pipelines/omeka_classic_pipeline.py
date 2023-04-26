from pathlib import Path

from paradicms_etl.extractors.omeka_classic_extractor import OmekaClassicExtractor
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.omeka_classic_transformer import OmekaClassicTransformer


class OmekaClassicPipeline(Pipeline):
    def __init__(
        self,
        *,
        api_key: str,
        data_dir_path: Path,
        endpoint_url: str,
        fullsize_height_px: int,
        fullsize_width_px: int,
        pipeline_id: str,
        square_thumbnail_height_px: int,
        square_thumbnail_width_px: int,
        thumbnail_height_px: int,
        thumbnail_width_px: int,
    ):
        Pipeline.__init__(
            self,
            extractor=OmekaClassicExtractor(
                api_key=api_key,
                endpoint_url=endpoint_url,
                cache_dir_path=self._cache_dir_path(
                    data_dir_path=data_dir_path, pipeline_id=pipeline_id
                )
                / "omeka-classic",
            ),
            id=pipeline_id,
            loader=RdfFileLoader(
                rdf_file_path=self._loaded_data_dir_path(
                    data_dir_path=data_dir_path, pipeline_id=pipeline_id
                )
                / "data.trig"
            ),
            transformer=OmekaClassicTransformer(
                fullsize_max_height_px=fullsize_height_px,
                fullsize_max_width_px=fullsize_width_px,
                square_thumbnail_height_px=square_thumbnail_height_px,
                square_thumbnail_width_px=square_thumbnail_width_px,
                thumbnail_max_height_px=thumbnail_height_px,
                thumbnail_max_width_px=thumbnail_width_px,
            ),
        )

    @classmethod
    def add_arguments(cls, arg_parser):
        Pipeline.add_arguments(cls, arg_parser)
        Pipeline._add_data_dir_path_argument(arg_parser)
        arg_parser.add_argument("--api-key", help="Omeka API key", required=True)
        arg_parser.add_argument(
            "--endpoint-url", help="Omeka API endpoint URL", required=True
        )
        arg_parser.add_argument(
            "--pipeline-id",
            help="unique identifier for this pipeline, used to isolate its cache",
            required=True,
        )
        for key in ("fullsize", "square-thumbnail", "thumbnail"):
            arg_parser.add_argument("--" + key + "-height-px", type=int)
            arg_parser.add_argument("--" + key + "-width-px", type=int)


if __name__ == "__main__":
    OmekaClassicPipeline.main()
