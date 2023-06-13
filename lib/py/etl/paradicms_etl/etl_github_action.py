import dataclasses
from abc import ABC
from pathlib import Path
from typing import Type, Optional, Tuple

from configargparse import ArgParser
from more_itertools import consume

from paradicms_etl.enricher import Enricher
from paradicms_etl.enrichers.wikidata_enricher import WikidataEnricher
from paradicms_etl.enrichers.wikimedia_commons_enricher import WikimediaCommonsEnricher
from paradicms_etl.extractor import Extractor
from paradicms_etl.github_action import GitHubAction
from paradicms_etl.loader import Loader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformer import Transformer


class EtlGitHubAction(GitHubAction, ABC):
    """
    Abstract base classes for GitHub Actions that extract, transform, and load data.
    """

    @dataclasses.dataclass(frozen=True)
    class Inputs(GitHubAction.Inputs):
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
        loaded_data_directory_path: str,
        loaded_data_file_path: Optional[str] = None,
        **kwds
    ):
        GitHubAction.__init__(self, **kwds)
        self.__force_extract = force_extract
        self.__loaded_data_directory_path = loaded_data_directory_path
        self.__loaded_data_file_path = loaded_data_file_path

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
        enrichers: Optional[Tuple[Enricher, ...]] = None,
        loader: Optional[Loader] = None
    ):
        if enrichers is None:
            enrichers = tuple(
                [
                    WikidataEnricher(cache_dir_path=self._cache_dir_path / "wikidata"),
                    WikimediaCommonsEnricher(
                        cache_dir_path=self._cache_dir_path / "wikimedia_commons"
                    ),
                ]
                + list(Pipeline.ENRICHERS_DEFAULT)
            )

        if loader is None:
            loader = RdfFileLoader(
                rdf_file_path=Path(self.__loaded_data_file_path)
                if self.__loaded_data_file_path
                else Path(self.__loaded_data_directory_path)
                / (self._pipeline_id + ".trig")
            )

        consume(
            Pipeline(
                enrichers=enrichers,
                extractor=extractor,
                id=self._pipeline_id,
                loader=loader,
                transformer=transformer,
            )(force_extract=self.__force_extract)
        )
