import dataclasses
from pathlib import Path
from typing import Type, Optional

from configargparse import ArgParser

from paradicms_etl.github_action import GitHubAction
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader


class EtlGitHubAction(GitHubAction):
    class Inputs(GitHubAction.Inputs):
        cache_directory_path: str = dataclasses.field(
            default="_cache",
            metadata={
                "description": "Path to a directory in which to store cached data"
            },
        )

        data_directory_path: str = dataclasses.field(
            default="_data",
            metadata={
                "description": "Path to a directory in which to store the loaded RDF file"
            },
        )

        data_file_path: str = dataclasses.field(
            default="",
            metadata={
                "description": "Path to a file in which to store the loaded RDF, overrides data_directory_path if specified"
            },
        )

    def __init__(
        self,
        *,
        force_extract: bool,
        cache_directory_path: str,
        data_directory_path: str,
        data_file_path: Optional[str] = None,
        **kwds
    ):
        GitHubAction.__init__(self, **kwds)
        self._cache_dir_path = Path(cache_directory_path)
        self._force_extract = force_extract
        self._loader = RdfFileLoader(
            rdf_file_path=Path(data_file_path)
            if data_file_path is not None
            else Path(data_directory_path) / (self._pipeline_id + ".trig")
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
