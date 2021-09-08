from paradicms_etl._pipeline import _Pipeline


class _PastPerfectPipeline(_Pipeline):
    @classmethod
    def add_arguments(cls, arg_parser, **kwds):
        _Pipeline.add_arguments(arg_parser, **kwds)
        arg_parser.add_argument(
            "--work-uri-prefix",
            help="prefix for work URIs e.g., http://example.com/work/; the work id will be appended to this to form the work URI",
            required=True,
        )
        cls._add_collection_arguments(arg_parser)
        cls._add_institution_arguments(arg_parser)
