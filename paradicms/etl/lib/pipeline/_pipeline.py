import logging
from abc import ABC
from pathlib import Path
from typing import Optional

from configargparse import ArgParser
from rdflib import URIRef

from paradicms.etl.lib.pipeline._extractor import _Extractor
from paradicms.etl.lib.pipeline._loader import _Loader
from paradicms.etl.lib.pipeline._transformer import _Transformer
from paradicms.etl.lib.pipeline.default_loader import DefaultLoader


class _Pipeline(ABC):
    def __init__(self, *, extractor: _Extractor, id: str, transformer: _Transformer, loader: Optional[_Loader] = None, **kwds):
        """
        Construct an extract-transform pipeline.
        :param extractor: extractor implementation
        :param id: unique identifier for this pipeline instance, may be adapted from arguments
        :param transformer: transformer implementation
        """
        self.__extractor = extractor
        self.__id = id
        if loader is None:
            loader = DefaultLoader(pipeline_id=id, **kwds)
        self.__loader = loader
        self.__transformer = transformer

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser) -> None:
        """
        Add pipeline-specific arguments. The parsed arguments are passed to the constructor as keywords.
        """
        arg_parser.add_argument("-c", is_config_file=True, help="config file path")
        arg_parser.add_argument("--data-dir-path",
                                       help="path to a directory to store extracted data and transformed models")
        arg_parser.add_argument(
            '--debug',
            action='store_true',
            help='turn on debugging'
        )
        arg_parser.add_argument("-f", "--force", action="store_true",
                                       help="force extract and transform, ignoring any cached data")
        arg_parser.add_argument("--force-extract", action="store_true",
                                       help="force extract, ignoring any cached data")
        arg_parser.add_argument("--force-transform", action="store_true",
                                       help="force transform, ignoring any cached data")
        arg_parser.add_argument("--fuseki-data-url", default="http://fuseki:3030/ds/data")
        arg_parser.add_argument(
            '--logging-level',
            help='set logging-level level (see Python logging module)'
        )

    @classmethod
    def _add_institution_arguments(cls, arg_parser: ArgParser) -> None:
        arg_parser.add_argument("--institution-name", required=True)
        arg_parser.add_argument("--institution-owner",
                                help="URI of the user that owns this institution, defaults to public")
        arg_parser.add_argument("--institution-rights", required=True)
        arg_parser.add_argument("--institution-uri", required=True)

    @property
    def extractor(self):
        return self.__extractor

    @classmethod
    def main(cls, args=None):
        if args is None:
            arg_parser = ArgParser()
            cls.add_arguments(arg_parser)
            args = arg_parser.parse_args()

        if args.debug:
            logging_level = logging.DEBUG
        elif args.logging_level is not None:
            logging_level = getattr(logging, args.logging_level.upper())
        else:
            logging_level = logging.INFO
        logging.basicConfig(
            format='%(asctime)s:%(module)s:%(lineno)s:%(name)s:%(levelname)s: %(message)s',
            level=logging_level
        )

        pipeline_kwds = vars(args).copy()
        pipeline_kwds.pop("data_dir_path")
        pipeline_kwds.pop("force")
        pipeline_kwds.pop("force_extract")
        pipeline_kwds.pop("force_transform")
        pipeline_kwds.pop("logging_level")
        try:
            pipeline_kwds.pop("pipeline_module")
        except KeyError:
            pass
        pipeline = cls(**pipeline_kwds)

        from paradicms.etl.lib.pipeline.pipeline_wrapper import PipelineWrapper
        pipeline_wrapper = PipelineWrapper(data_dir_path=Path(args.data_dir_path) if args.data_dir_path else None, pipeline=pipeline)

        force = bool(getattr(args, "force", False))
        force_extract = force or bool(getattr(args, "force_extract", False))
        force_load = force or bool(getattr(args, "force_load", False))
        force_transform = force or bool(getattr(args, "force_transform", False))

        extract_kwds = pipeline_wrapper.extract(force=force_extract)
        graph_or_kwds = pipeline_wrapper.transform(force=force_transform, **extract_kwds)
        if isinstance(graph_or_kwds, dict):
            pipeline_wrapper.load(force=force_load, **graph_or_kwds)
        else:
            pipeline_wrapper.load(force=force_load, graph=graph_or_kwds)

    @property
    def id(self):
        return self.__id

    @staticmethod
    def id_to_uri(id_: str) -> URIRef:
        return URIRef("urn:pipeline:" + id_)

    @property
    def loader(self):
        return self.__loader

    @property
    def transformer(self):
        return self.__transformer

    @property
    def uri(self) -> URIRef:
        return self.id_to_uri(self.id)
