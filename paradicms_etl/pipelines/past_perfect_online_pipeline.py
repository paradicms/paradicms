from paradicms_etl.extractors.past_perfect_online_extractor import (
    PastPerfectOnlineExtractor,
)
from paradicms_etl.pipelines.past_perfect_pipeline import PastPerfectPipeline
from paradicms_etl.transformers.past_perfect_online_transformer import (
    PastPerfectOnlineTransformer,
)


class PastPerfectOnlinePipeline(PastPerfectPipeline):
    def __init__(self, *, subdomain: str, **kwds):
        PastPerfectPipeline.__init__(
            self,
            extractor=PastPerfectOnlineExtractor(pipeline_id=subdomain, **kwds),
            id=subdomain,
            transformer=PastPerfectOnlineTransformer(pipeline_id=subdomain, **kwds),
            **kwds
        )

    @classmethod
    def add_arguments(cls, arg_parser):
        PastPerfectPipeline.add_arguments(arg_parser)
        arg_parser.add_argument(
            "--subdomain",
            help="subdomain of pastperfectonline.com e.g., 'yourcollection' in yourcollection.pastperfectonline.com",
            required=True,
        )


if __name__ == "__main__":
    PastPerfectOnlinePipeline.main()
