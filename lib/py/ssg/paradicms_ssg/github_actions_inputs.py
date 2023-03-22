import dataclasses
import os
from dataclasses import dataclass

from configargparse import ArgParser


@dataclass(frozen=True)
class GitHubActionInputs:
    class _RequiredType(str):
        pass

    REQUIRED = _RequiredType()

    pipeline_id: str = REQUIRED
    app_configuration_file_path: str = ""
    debug: str = ""
    dev: bool = False
    build_directory_path: str = "_site"

    @classmethod
    def from_args(cls):
        argument_parser = ArgParser()
        argument_parser.add_argument(
            "-c", is_config_file=True, help="path to a file to read arguments from"
        )
        for field in dataclasses.fields(cls):
            if field.name == "dev":
                continue
            argument_parser.add_argument(
                "--" + field.name.replace("_", "-"),
                env_var="INPUT_" + field.name.upper(),
                required=id(field.default) == id(GitHubActionInputs.REQUIRED),
            )
            field.default
        # The dev argument can only be supplied manually from the command line.
        # It makes no sense to run the Next.js dev server ("next dev") in the GitHub Action.
        argument_parser.add_argument("--dev", action="store_true")
        args = argument_parser.parse_args()
        kwds = {
            key: value
            for key, value in vars(args).items()
            if isinstance(value, str) and value.strip()
        }
        if args.dev:
            kwds["dev"] = True
        for ignore_key in ("c",):
            kwds.pop(ignore_key, None)
        if "pipeline_id" not in kwds:
            kwds["pipeline_id"] = os.environ["GITHUB_REPOSITORY"].rsplit("/", 1)[-1]
        return cls(**kwds)

    def __post_init__(self):
        for field in dataclasses.fields(self):
            if id(field.default) != id(GitHubActionInputs.REQUIRED):
                continue
            value = getattr(self, field.name)
            if not value.strip():
                raise ValueError("empty/blank " + field.name)
