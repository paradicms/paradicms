from paradicms_etl._pipeline import _Pipeline

from .omeka_classic_extractor import OmekaClassicExtractor
from .omeka_classic_transformer import OmekaClassicTransformer


class OmekaClassicPipeline(_Pipeline):
    def __init__(
        self,
        *,
        api_key: str,
        endpoint_url: str,
        pipeline_id: str,
        fullsize_height_px: int,
        fullsize_width_px: int,
        square_thumbnail_height_px: int,
        square_thumbnail_width_px: int,
        thumbnail_height_px: int,
        thumbnail_width_px: int,
        **kwds
    ):
        _Pipeline.__init__(
            self,
            extractor=OmekaClassicExtractor(
                api_key=api_key,
                endpoint_url=endpoint_url,
                pipeline_id=pipeline_id,
                **kwds
            ),
            id=pipeline_id,
            transformer=OmekaClassicTransformer(
                fullsize_height_px=fullsize_height_px,
                fullsize_width_px=fullsize_width_px,
                pipeline_id=pipeline_id,
                square_thumbnail_height_px=square_thumbnail_height_px,
                square_thumbnail_width_px=square_thumbnail_width_px,
                thumbnail_height_px=thumbnail_height_px,
                thumbnail_width_px=thumbnail_width_px,
                **kwds
            ),
            **kwds
        )

    @classmethod
    def add_arguments(cls, arg_parser):
        _Pipeline.add_arguments(cls, arg_parser)
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
        cls._add_institution_arguments(arg_parser)


if __name__ == "__main__":
    OmekaClassicPipeline.main()
