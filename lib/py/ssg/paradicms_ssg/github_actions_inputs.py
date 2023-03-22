import dataclasses
import os
from dataclasses import dataclass
from typing import Dict

from configargparse import ArgParser


@dataclass(frozen=True)
class GitHubActionInputs:
    class _RequiredType(str):
        pass

    REQUIRED = _RequiredType()

    app_configuration_file_path: str = dataclasses.field(
        default="",
        metadata={
            "description": "Path to an app configuration file, which controls the static site generator"
        },
    )

    build_directory_path: str = dataclasses.field(
        default="_site",
        metadata={
            "description": "Path to a directory where the generated static assets (CSS, HTML, JavaScript) should be placed"
        },
    )

    debug: str = dataclasses.field(
        default="", metadata={"description": "Debug the action"}
    )

    dev: bool = False

    pipeline_id: str = dataclasses.field(
        default="",
        metadata={
            "description": "Pipeline id. Defaults to the name of the repository."
        },
    )

    @classmethod
    @property
    def fields_yaml(cls) -> Dict[str, Dict[str, str]]:
        fields_yaml = {}
        for field in dataclasses.fields(cls):
            if not issubclass(field.type, str):
                continue
            field_yaml = {}
            if field.default:
                field_yaml["default"] = str(field.default)
            if field.metadata:
                for key in ("description",):
                    value = field.metadata.get(key)
                    if value:
                        field_yaml[key] = value.strip()
            field_yaml["required"] = id(field.default) == id(
                GitHubActionInputs.REQUIRED
            )
            fields_yaml[field.name] = {
                key: field_yaml[key] for key in sorted(field_yaml.keys())
            }
        return fields_yaml

    @classmethod
    def from_args(cls):
        argument_parser = ArgParser()
        argument_parser.add_argument(
            "-c", is_config_file=True, help="path to a file to read arguments from"
        )
        for field in dataclasses.fields(cls):
            arg_name = "--" + field.name.replace("_", "-")
            if field.type == bool:
                # The dev argument can only be supplied manually from the command line.
                # It makes no sense to run the Next.js dev server ("next dev") in the GitHub Action.
                argument_parser.add_argument(arg_name, action="store_true")
            elif issubclass(field.type, str):
                argument_parser.add_argument(
                    arg_name,
                    env_var="INPUT_" + field.name.upper(),
                    required=id(field.default) == id(GitHubActionInputs.REQUIRED),
                )
            else:
                raise TypeError(field.type)

        args = argument_parser.parse_args()

        kwds = {}
        for key, value in vars(args).items():
            if value is None:
                continue
            elif key in {"c"}:
                continue
            elif isinstance(value, bool):
                kwds[key] = value
            elif isinstance(value, str):
                stripped_value = value.strip()
                if stripped_value:
                    kwds[key] = stripped_value
            else:
                raise TypeError(type(value))
        if "pipeline_id" not in kwds:
            kwds["pipeline_id"] = os.environ["GITHUB_REPOSITORY"].rsplit("/", 1)[-1]

        print(kwds)

        return cls(**kwds)

    def __post_init__(self):
        for field in dataclasses.fields(self):
            if id(field.default) != id(GitHubActionInputs.REQUIRED):
                continue
            value = getattr(self, field.name)
            if not value.strip():
                raise ValueError("empty/blank " + field.name)
