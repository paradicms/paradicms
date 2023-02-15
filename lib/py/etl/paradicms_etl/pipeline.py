import logging
from abc import ABC
from pathlib import Path
from typing import Dict, Optional, Any, Iterable

from configargparse import ArgParser

from paradicms_etl.extractor import Extractor
from paradicms_etl.loader import Loader
from paradicms_etl.model import Model
from paradicms_etl.transformer import Transformer
from paradicms_etl.transformers.validation_transformer import validation_transformer
from paradicms_etl.utils.existing_directory_argument_type import (
    existing_directory_argument_type,
)


class Pipeline(ABC):
    def __init__(
        self,
        *,
        extractor: Extractor,
        id: str,
        loader: Loader,
        transformer: Transformer,
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

        self.__extractor = extractor
        self.__id = id
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
        # arg_parser.add_argument(
        #     "--data-dir-path",
        #     help="path to a directory to store extracted data and transformed models",
        # )
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

    @classmethod
    def _add_data_dir_path_argument(cls, arg_parser: ArgParser):
        arg_parser.add_argument(
            "--data-dir-path",
            help="path to an existing directory to store cached extracted data and/or loaded data",
            required=True,
            type=existing_directory_argument_type,
        )

    def extract_transform(self, *, force_extract: bool = False) -> Iterable[Model]:
        return self.__transform(self.__extract(force=force_extract))

    def __extract(self, *, force: bool = False) -> Optional[Dict[str, object]]:
        return self.__extractor(force=force)

    def extract_transform_load(self, *, force_extract: bool = False):
        return self.__load(self.extract_transform(force_extract=force_extract))

    @staticmethod
    def _extracted_data_dir_path(*, data_dir_path: Path, pipeline_id: str):
        return data_dir_path / pipeline_id / "extracted"

    @property
    def extractor(self):
        return self.__extractor

    @property
    def id(self):
        return self.__id

    @property
    def _logger(self):
        return self.__logger

    def __load(self, models: Iterable[Model]) -> Any:
        return self.__loader(flush=True, models=models)

    @staticmethod
    def _loaded_data_dir_path(*, data_dir_path: Path, pipeline_id: str):
        return data_dir_path / pipeline_id / "loaded"

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
        for key in ("c", "debug", "force", "force_extract", "logging_level"):
            pipeline_kwds.pop(key, None)
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
