from paradicms_etl._pipeline import _Pipeline


class _PastPerfectPipeline(_Pipeline):
    @classmethod
    def add_arguments(cls, arg_parser, **kwds):
        _Pipeline.add_arguments(arg_parser, **kwds)
        arg_parser.add_argument(
            "--object-uri-prefix",
            help="prefix for object URIs e.g., http://example.com/object/; the object id will be appended to this to form the object URI",
            required=True,
        )
        cls._add_collection_arguments(arg_parser)
        cls._add_institution_arguments(arg_parser)
