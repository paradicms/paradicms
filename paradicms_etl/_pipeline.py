import logging
from abc import ABC
from pathlib import Path
from typing import Dict, Optional

from configargparse import ArgParser
from rdflib import URIRef

from paradicms_etl._extractor import _Extractor
from paradicms_etl._loader import _Loader
from paradicms_etl._transformer import _Transformer
from paradicms_etl.loaders.default_loader import DefaultLoader


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
    def add_arguments(cls, arg_parser: ArgParser, *, data_dir_path_default: Optional[str] = None) -> None:
        """
        Add pipeline-specific arguments. The parsed arguments are passed to the constructor as keywords.
        """
        arg_parser.add_argument("-c", is_config_file=True, help="config file path")
        arg_parser.add_argument("--data-dir-path",
                                default=data_dir_path_default,
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
    def main(cls, args: Optional[Dict[str, object]]=None):
        if args is None:
            arg_parser = ArgParser()
            cls.add_arguments(arg_parser)
            args = arg_parser.parse_args()
            args = vars(args).copy()

        if args.get("debug", False):
            logging_level = logging.DEBUG
        elif args.get("logging_level") is not None:
            logging_level = getattr(logging, args["logging_level"].upper())
        else:
            logging_level = logging.INFO
        logging.basicConfig(
            format='%(asctime)s:%(module)s:%(lineno)s:%(name)s:%(levelname)s: %(message)s',
            level=logging_level
        )

        pipeline_kwds = args.copy()
        for key in ("data_dir_path", "force", "force_extract", "logging_level", "pipeline_module"):
            try:
                pipeline_kwds.pop(key)
            except KeyError:
                pass
        pipeline = cls(**pipeline_kwds)

        from paradicms_etl.pipeline_wrapper import PipelineWrapper
        data_dir_path = args.get("data_dir_path")
        if data_dir_path is not None:
            data_dir_path = Path(data_dir_path)
        pipeline_wrapper = PipelineWrapper(data_dir_path=data_dir_path, pipeline=pipeline)

        force = bool(args.get("force", False))
        force_extract = force or bool(args.get("force_extract", False))
        force_load = force or bool(args.get("force_load", False))

        extract_kwds = pipeline_wrapper.extract(force=force_extract)
        models = pipeline_wrapper.transform(**extract_kwds)
        pipeline_wrapper.load(force=force_load, models=models)

    @property
    def id(self):
        return self.__id

    @staticmethod
    def id_to_uri(id_: str) -> URIRef:
        return URIRef("urn:paradicms_etl:pipeline:" + id_)

    @property
    def loader(self):
        return self.__loader

    @property
    def transformer(self):
        return self.__transformer

    @property
    def uri(self) -> URIRef:
        return self.id_to_uri(self.id)
