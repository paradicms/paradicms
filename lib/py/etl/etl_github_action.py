import dataclasses
from pathlib import Path
from typing import Type, Optional

from configargparse import ArgParser

from paradicms_etl.github_action import GitHubAction


class EtlGitHubAction(GitHubAction):
    class Inputs(GitHubAction.Inputs):
        loaded_data_file_path: str = dataclasses.field(
            default="",
            metadata={"description": "Path to the RDF file to output"},
        )

    def __init__(
        self, *, force_extract: bool, loaded_data_file_path: Optional[str], **kwds
    ):
        GitHubAction.__init__(self, **kwds)
        self._force_extract = force_extract
        self._loaded_data_file_path = (
            Path(loaded_data_file_path)
            if loaded_data_file_path
            else self._data_directory_path / "loaded" / (self._pipeline_id + ".trig")
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

    @property
    def _extracted_data_directory_path(self) -> Path:
        return self._data_directory_path / "extracted"
