import logging
from abc import ABC
from pathlib import Path
from typing import Dict, Optional, Any, Iterable, Tuple

from configargparse import ArgParser
from more_itertools import consume

from paradicms_etl.enricher import Enricher
from paradicms_etl.enrichers.creative_commons_licenses_enricher import (
    creative_commons_licenses_enricher,
)
from paradicms_etl.enrichers.rights_statements_dot_org_rights_statements_enricher import (
    rights_statements_dot_org_rights_statements_enricher,
)
from paradicms_etl.extractor import Extractor
from paradicms_etl.loader import Loader
from paradicms_etl.model import Model
from paradicms_etl.transformer import Transformer
from paradicms_etl.utils.existing_directory_argument_type import (
    existing_directory_argument_type,
)
from paradicms_etl.validation_result import ValidationResult
from paradicms_etl.validator import Validator
from paradicms_etl.validators.reference_validator import ReferenceValidator


class Pipeline(ABC):
    ENRICHERS_DEFAULT: Tuple[Enricher, ...] = (
        creative_commons_licenses_enricher,
        rights_statements_dot_org_rights_statements_enricher,
    )
    VALIDATORS_DEFAULT: Tuple[Validator, ...] = (ReferenceValidator(),)

    def __init__(
        self,
        *,
        extractor: Extractor,
        id: str,
        loader: Loader,
        transformer: Transformer,
        enrichers: Optional[Tuple[Enricher, ...]] = None,
        validators: Optional[Tuple[Validator, ...]] = None
    ):
        """
        Construct an extract-transform-load pipeline.
        :param validators: zero or more enrichers to apply to the transformed models; if None, use the default set
        :param extractor: extractor implementation
        :param id: unique identifier for this pipeline instance, may be adapted from arguments
        :param loader: optional loader; if not specified, a default loader will be used
        :param transformer: transformer implementation
        :param validators: zero or more validators to apply to the transformed models; if None, use the default set
        """

        if enrichers is None:
            enrichers = self.ENRICHERS_DEFAULT
        self.__enrichers = enrichers
        self.__extractor = extractor
        self.__id = id
        self.__loader = loader
        self.__logger = logging.getLogger(self.__class__.__name__)
        self.__transformer = transformer
        if validators is None:
            validators = self.VALIDATORS_DEFAULT
        self.__validators = validators

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
            help="path to an existing directory to store cached data and/or loaded data",
            required=True,
            type=existing_directory_argument_type,
        )

    @staticmethod
    def _cache_dir_path(*, data_dir_path: Path, pipeline_id: str):
        return data_dir_path / pipeline_id / "cache"

    def __call__(self, *, force_extract: bool = False) -> Iterable[Model]:
        return self.__load(
            self.__validate(
                self.__enrich(self.__transform(self.__extract(force=force_extract)))
            )
        )

    def __enrich(self, models: Iterable[Model]) -> Iterable[Model]:
        enriched_models = models
        for enricher in self.__enrichers:
            enriched_models = enricher(enriched_models)
        return enriched_models

    def __extract(self, *, force: bool) -> Optional[Dict[str, object]]:
        return self.__extractor(force=force)

    @property
    def id(self):
        return self.__id

    @property
    def _logger(self):
        return self.__logger

    def __load(self, models: Iterable[Model]) -> Iterable[Model]:
        return self.__loader(flush=True, models=models)

    @staticmethod
    def _loaded_data_dir_path(*, data_dir_path: Path, pipeline_id: str):
        return data_dir_path / pipeline_id / "loaded"

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

        consume(pipeline(force_extract=force_extract))

    def __transform(self, extract_kwds: Optional[Dict[str, Any]]) -> Iterable[Model]:
        if extract_kwds is None:
            extract_kwds = {}
        return self.__transformer(**extract_kwds)

    def __validate(self, models: Iterable[Model]) -> Iterable[Model]:
        validated_models = models
        for validator in self.__validators:
            validated_models = self.__validate_with_validator(
                validated_models, validator
            )
        return validated_models

    def __validate_with_validator(
        self, models: Iterable[Model], validator: Validator
    ) -> Iterable[Model]:
        for output in validator(models):
            if isinstance(output, ValidationResult):
                if output.severity == ValidationResult.Severity.INFO:
                    log_level = logging.INFO
                elif output.severity == ValidationResult.Severity.WARNING:
                    log_level = logging.WARNING
                elif output.severity == ValidationResult.Severity.VIOLATION:
                    log_level = logging.ERROR
                else:
                    raise NotImplementedError(output.severity)

                self.__logger.log(log_level, output.message)
            else:
                yield output
