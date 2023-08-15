import dataclasses
from abc import ABC
from pathlib import Path
from typing import Type, Optional

from configargparse import ArgParser
from more_itertools import consume

from paradicms_etl.enrichers.enricher_factory import EnricherFactory
from paradicms_etl.extractor import Extractor
from paradicms_etl.github_action import GitHubAction
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformer import Transformer


class EtlGitHubAction(GitHubAction, ABC):
    """
    Abstract base classes for GitHub Actions that extract, transform, and load data.
    """

    @dataclasses.dataclass(frozen=True)
    class Inputs(GitHubAction.Inputs):
        enrichers: str = dataclasses.field(
            default="",
            metadata={"description": "comma-separated list of enrichers to use"},
        )

        loaded_data_directory_path: str = dataclasses.field(
            default=".paradicms/data",
            metadata={
                "description": "Path to a directory in which to store the loaded RDF file"
            },
        )

        loaded_data_file_path: str = dataclasses.field(
            default="",
            metadata={
                "description": "Path to a file in which to store the loaded RDF, overrides data_directory_path if specified"
            },
        )

    def __init__(
        self,
        *,
        force_extract: bool,
        enrichers: str,
        loaded_data_directory_path: str,
        loaded_data_file_path: Optional[str] = None,
        **kwds,
    ):
        GitHubAction.__init__(self, **kwds)

        if enrichers:
            self.__enrichers = tuple(
                EnricherFactory.enricher_by_name(
                    enricher_name.strip(), cache_dir_path=self._cache_dir_path
                )
                for enricher_name in enrichers.split(",")
            )
        else:
            self.__enrichers = EnricherFactory.default_enrichers(
                cache_dir_path=self._cache_dir_path
            )

        self.__force_extract = force_extract

        self.__loader = RdfFileLoader(
            rdf_file_path=Path(loaded_data_file_path)
            if loaded_data_file_path
            else Path(loaded_data_directory_path) / (self._pipeline_id + ".trig")
        )

    @classmethod
    def _add_arguments(
        cls, arg_parser: ArgParser, *, inputs_class: Type[GitHubAction.Inputs]
    ):
        GitHubAction._add_arguments(arg_parser, inputs_class=inputs_class)

        arg_parser.add_argument(
            "--force-extract",
            action="store_true",
            help="force extraction, ignoring any cached files",
        )

    def _run_pipeline(
        self,
        *,
        extractor: Extractor,
        transformer: Transformer,
    ):
        consume(
            Pipeline(
                enrichers=self.__enrichers,
                extractor=extractor,
                id=self._pipeline_id,
                loader=self.__loader,
                transformer=transformer,
            )(force_extract=self.__force_extract)
        )
