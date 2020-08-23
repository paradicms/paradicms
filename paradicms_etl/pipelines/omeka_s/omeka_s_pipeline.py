from paradicms_etl._pipeline import _Pipeline

from .omeka_s_extractor import OmekaSExtractor
from .omeka_s_transformer import OmekaSTransformer


class OmekaClassicPipeline(_Pipeline):
    def __init__(
        self,
        *,
        endpoint_url: str,
        pipeline_id: str,
        square_thumbnail_height_px: int,
        square_thumbnail_width_px: int,
        **kwds
    ):
        _Pipeline.__init__(
            self,
            extractor=OmekaSExtractor(
                endpoint_url=endpoint_url, pipeline_id=pipeline_id, **kwds
            ),
            id=pipeline_id,
            transformer=OmekaSTransformer(
                pipeline_id=pipeline_id,
                square_thumbnail_height_px=square_thumbnail_height_px,
                square_thumbnail_width_px=square_thumbnail_width_px,
                **kwds
            ),
            **kwds
        )

    @classmethod
    def add_arguments(cls, arg_parser):
        _Pipeline.add_arguments(cls, arg_parser)
        arg_parser.add_argument(
            "--endpoint-url", help="Omeka API endpoint URL", required=True
        )
        arg_parser.add_argument(
            "--pipeline-id",
            help="unique identifier for this pipeline, used to isolate its cache",
            required=True,
        )
        arg_parser.add_argument("--square-thumbnail-height-px", default=200, type=int)
        arg_parser.add_argument("--square-thumbnail-width-px", default=200, type=int)
        cls._add_institution_arguments(arg_parser)
