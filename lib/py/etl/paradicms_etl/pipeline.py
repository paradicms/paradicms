import logging
from abc import ABC
from pathlib import Path
from typing import Dict, Optional, Any, Iterable

from configargparse import ArgParser

from paradicms_etl.extractor import Extractor
from paradicms_etl.loader import Loader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.model import Model
from paradicms_etl.transformer import Transformer
from paradicms_etl.transformers.validation_transformer import validation_transformer


class Pipeline(ABC):
    def __init__(
        self,
        *,
        extractor: Extractor,
        id: str,
        transformer: Transformer,
        data_dir_path: Optional[Path] = None,
        loader: Optional[Loader] = None,
        validate_transform: bool = True,
        **kwds,
    ):
        """
        Construct an extract-transform-load pipeline.
        :param extractor: extractor implementation
        :param id: unique identifier for this pipeline instance, may be adapted from arguments
        :param loader: optional loader; if not specified, a default loader will be used
        :param transformer: transformer implementation
        """

        assert data_dir_path is not None
        self.__data_dir_path = data_dir_path
        self.__extractor = extractor
        self.__id = id
        if loader is None:
            loader = RdfFileLoader()
        self.__loader = loader
        self.__logger = logging.getLogger(self.__class__.__name__)
        self.__transformer = transformer
        self.__validate_transform = validate_transform

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser) -> None:
        """
        Add pipeline-specific arguments. The parsed arguments are passed to the constructor as keywords.
        """
        arg_parser.add_argument("-c", is_config_file=True, help="config file path")
        arg_parser.add_argument(
            "--data-dir-path",
            help="path to a directory to store extracted data and transformed models",
        )
        arg_parser.add_argument(
            "--debug", action="store_true", help="turn on debugging"
        )
        arg_parser.add_argument(
            "-f",
            "--force",
            action="store_true",
            help="force extract and transform, ignoring any cached data",
        )
        arg_parser.add_argument(
            "--force-extract",
            action="store_true",
            help="force extract, ignoring any cached data",
        )
        arg_parser.add_argument(
            "--logging-level",
            help="set logging-level level (see Python logging module)",
        )

    def extract_transform(self, *, force_extract: bool = False):
        return self.__transform(self.__extract(force=force_extract))

    def __extract(self, *, force: bool = False) -> Optional[Dict[str, object]]:
        return self.__extractor(
            extracted_data_dir_path=self.__extracted_data_dir_path,
            force=force,
            pipeline_id=self.__id,
        )

    def extract_transform_load(self, *, force_extract: bool = False):
        return self.__load(self.extract_transform(force_extract=force_extract))

    @property
    def __extracted_data_dir_path(self) -> Path:
        extracted_data_dir_path = (
            self.__data_dir_path / self.__id / "extracted"
        ).absolute()
        extracted_data_dir_path.mkdir(parents=True, exist_ok=True)
        return extracted_data_dir_path

    @property
    def extractor(self):
        return self.__extractor

    @property
    def id(self):
        return self.__id

    # @staticmethod
    # def id_to_uri(id_: str) -> URIRef:
    #     return URIRef("urn:paradicms_etl:pipeline:" + id_)

    @property
    def _logger(self):
        return self.__logger

    def __load(self, models: Iterable[Model]) -> Any:
        return self.__loader(
            flush=True,
            loaded_data_dir_path=self.__loaded_data_dir_path,
            models=models,
            pipeline_id=self.__id,
        )

    @property
    def __loaded_data_dir_path(self) -> Path:
        """
        Directory to use to store loaded data.
        The directory is created on demand when this method is called.
        A loader does not have to use this directory. It can load data into an external database, for example.
        """

        loaded_data_dir_path = (self.__data_dir_path / self.__id / "loaded").absolute()
        loaded_data_dir_path.mkdir(parents=True, exist_ok=True)
        return loaded_data_dir_path

    @property
    def loader(self):
        return self.__loader

    @classmethod
    def main(cls, args: Optional[Dict[str, object]] = None):
        if args is None:
            arg_parser = ArgParser()
            cls.add_arguments(arg_parser)
            args = arg_parser.parse_args()
            args = vars(args).copy()

        if args.get("debug", False):
            logging_level = logging.DEBUG
        elif args.get("logging_level") is not None:
            logging_level = getattr(logging, str(args["logging_level"]).upper())
        else:
            logging_level = logging.INFO
        logging.basicConfig(
            format="%(asctime)s:%(module)s:%(lineno)s:%(name)s:%(levelname)s: %(message)s",
            level=logging_level,
        )

        pipeline_kwds = args.copy()
        for key in ("force", "force_extract", "logging_level"):
            pipeline_kwds.pop(key, None)
        data_dir_path = pipeline_kwds.get("data_dir_path")
        if data_dir_path is not None:
            pipeline_kwds["data_dir_path"] = Path(str(data_dir_path))
        pipeline = cls(**pipeline_kwds)  # type: ignore

        force = bool(args.get("force", False))
        force_extract = force or bool(args.get("force_extract", False))

        pipeline.extract_transform_load(force_extract=force_extract)

    def __transform(self, extract_kwds: Optional[Dict[str, Any]]) -> Iterable[Model]:
        if extract_kwds is None:
            extract_kwds = {}
        transform_result = self.transformer(**extract_kwds)
        if self.__validate_transform:
            return validation_transformer(transform_result)
        else:
            return transform_result

    @property
    def transformer(self):
        return self.__transformer

    # @property
    # def uri(self) -> URIRef:
    #     return self.id_to_uri(self.id)
