from paradicms.etl.lib.pipeline._pipeline import _Pipeline
from .omeka_s_extractor import OmekaSExtractor
from .omeka_s_transformer import OmekaSTransformer


class OmekaClassicPipeline(_Pipeline):
    def __init__(
            self, *,
            endpoint_url: str,
            pipeline_id: str,
            square_thumbnail_height_px: int,
            square_thumbnail_width_px: int,
            **kwds
    ):
        _Pipeline.__init__(
            self,
            extractor=OmekaSExtractor(
                endpoint_url=endpoint_url
            ),
            id=pipeline_id,
            transformer=OmekaSTransformer(
                institution_kwds=kwds,
                square_thumbnail_height_px=square_thumbnail_height_px,
                square_thumbnail_width_px=square_thumbnail_width_px,
            ),
            **kwds
        )

    @classmethod
    def add_arguments(cls, argument_parser):
        argument_parser.add_argument("--endpoint-url", help="Omeka API endpoint URL", required=True)
        argument_parser.add_argument(
            '--pipeline-id',
            help='unique identifier for this pipeline, used to isolate its cache',
            required=True
        )
        argument_parser.add_argument(
            '--square-thumbnail-height-px',
            default=200,
            type=int
        )
        argument_parser.add_argument(
            '--square-thumbnail-width-px',
            default=200,
            type=int
        )
        cls._add_institution_arguments(argument_parser)
