import dataclasses
import logging
import os
import sys
from abc import ABC, abstractmethod
from pathlib import Path
from typing import Dict, Any, Type, Optional

import yaml
from configargparse import ArgParser


class GitHubAction(ABC):
    """
    Abstract base class for GitHub Actions.
    """

    @dataclasses.dataclass(frozen=True)
    class Inputs:
        class _RequiredType(str):
            pass

        REQUIRED = _RequiredType()

        cache_directory_path: str = dataclasses.field(
            default=".paradicms/.cache",
            metadata={
                "description": "Path to a directory in which to store cached data"
            },
        )

        log_level: str = dataclasses.field(
            default="INFO", metadata={"description": "Python log level"}
        )

        pipeline_id: str = dataclasses.field(
            default="",
            metadata={
                "description": "Pipeline id. Defaults to the name of the repository."
            },
        )

        @classmethod
        @property
        def fields_yaml(cls) -> Dict[str, Dict[str, Any]]:
            fields_yaml: Dict[str, Dict[str, Any]] = {}
            for field in dataclasses.fields(cls):
                if not issubclass(field.type, str):
                    continue
                field_yaml: Dict[str, Any] = {}
                if field.default:
                    field_yaml["default"] = str(field.default)
                if field.metadata:
                    for key in ("description",):
                        value = field.metadata.get(key)
                        if value:
                            field_yaml[key] = value.strip()
                field_yaml["required"] = id(field.default) == id(
                    GitHubAction.Inputs.REQUIRED
                )
                fields_yaml[field.name] = {
                    key: field_yaml[key] for key in sorted(field_yaml.keys())
                }
            return fields_yaml

        def __post_init__(self):
            for field in dataclasses.fields(self):
                if id(field.default) != id(GitHubAction.Inputs.REQUIRED):
                    continue
                value = getattr(self, field.name)
                if not value.strip():
                    raise ValueError("empty/blank " + field.name)

    def __init__(self, *, cache_directory_path: str, pipeline_id: str):
        self._cache_dir_path = Path(cache_directory_path) / pipeline_id
        self.__logger = logging.getLogger(__name__)
        self._pipeline_id = pipeline_id

    @classmethod
    def _add_arguments(cls, arg_parser: ArgParser, *, inputs_class: Type[Inputs]):
        arg_parser.add_argument(
            "-c", is_config_file=True, help="path to a file to read arguments from"
        )

        for field in dataclasses.fields(inputs_class):
            arg_name = "--" + field.name.replace("_", "-")
            if not issubclass(field.type, str):
                raise TypeError(field.type)
            arg_parser.add_argument(
                arg_name,
                default=field.default
                if id(field.default) != id(GitHubAction.Inputs.REQUIRED)
                else None,
                env_var="INPUT_" + field.name.upper(),
                required=id(field.default) == id(GitHubAction.Inputs.REQUIRED),
            )

    @classmethod
    def __generate_action_yml(cls, inputs_class: Type[Inputs]):
        assert cls.__doc__ is not None
        action_yaml = {
            "author": "Minor Gordon",
            "branding": {
                "icon": "loader",
            },
            "description": cls.__doc__.strip(),
            "inputs": inputs_class.fields_yaml,
            "name": cls.__doc__.strip(),
            "runs": {"image": "Dockerfile", "using": "docker"},
        }

        action_yml_file_path = (
            Path(sys.modules[cls.__module__].__file__).parent / "action.yml"  # type: ignore
        ).absolute()
        with open(action_yml_file_path, "w+") as action_yml_file:
            yaml.dump(
                {key: action_yaml[key] for key in sorted(action_yaml.keys())},
                action_yml_file,
            )

    @classmethod
    def main(cls, *, inputs_class: Optional[Type[Inputs]] = None):
        if inputs_class is None:
            inputs_class = cls.Inputs

        if len(sys.argv) > 1:
            # ArgParse/ArgumentParser has no notion of a "default subparser"
            # https://stackoverflow.com/questions/46963172/how-do-you-get-argparse-to-choose-a-default-subparser
            # Hack it here instead of forcing actions to require a subparser command like "run".
            command = sys.argv[1].lower()
            if command == "generate-action-yml":
                cls.__generate_action_yml(inputs_class=inputs_class)
                return

        args = cls.__parse_args(inputs_class=inputs_class)
        inputs = cls.__parse_inputs(args, inputs_class=inputs_class)

        log_level = inputs.pop("log_level")
        logging.basicConfig(level=getattr(logging, log_level.upper()))

        # Instantiate this class with args and inputs
        cls_kwds = {
            key: value
            for key, value in vars(args).items()
            if key not in {"c"} and value is not None
        }
        cls_kwds.update(inputs)

        # Call its run method
        cls(**cls_kwds)._run()

    @classmethod
    def __parse_args(cls, *, inputs_class: Type[Inputs]):
        arg_parser = ArgParser()
        cls._add_arguments(arg_parser, inputs_class=inputs_class)
        return arg_parser.parse_args()

    @classmethod
    def __parse_inputs(cls, args, *, inputs_class: Type[Inputs]) -> Dict[str, str]:
        inputs: Dict[str, str] = {}
        for field in dataclasses.fields(inputs_class):
            value = getattr(args, field.name)
            if value is None:
                continue
            stripped_value = value.strip()
            if stripped_value:
                inputs[field.name] = stripped_value
        if "pipeline_id" not in inputs:
            inputs["pipeline_id"] = os.environ["GITHUB_REPOSITORY"].rsplit("/", 1)[-1]
        return inputs

    @abstractmethod
    def _run(self):
        raise NotImplementedError
