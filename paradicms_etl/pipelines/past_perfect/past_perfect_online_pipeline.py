from paradicms_etl.pipelines.past_perfect._past_perfect_pipeline import (
    _PastPerfectPipeline,
)
from paradicms_etl.pipelines.past_perfect.past_perfect_online_extractor import (
    PastPerfectOnlineExtractor,
)
from paradicms_etl.pipelines.past_perfect.past_perfect_online_transformer import (
    PastPerfectOnlineTransformer,
)


class PastPerfectOnlinePipeline(_PastPerfectPipeline):
    def __init__(self, *, subdomain: str, **kwds):
        _PastPerfectPipeline.__init__(
            self,
            extractor=PastPerfectOnlineExtractor(pipeline_id=subdomain, **kwds),
            id=subdomain,
            transformer=PastPerfectOnlineTransformer(pipeline_id=subdomain, **kwds),
            **kwds
        )

    @classmethod
    def add_arguments(cls, arg_parser):
        _PastPerfectPipeline.add_arguments(arg_parser)
        arg_parser.add_argument(
            "--subdomain",
            help="subdomain of pastperfectonline.com e.g., 'yourcollection' in yourcollection.pastperfectonline.com",
            required=True,
        )


if __name__ == "__main__":
    PastPerfectOnlinePipeline.main()
