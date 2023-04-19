import dataclasses
from dataclasses import dataclass
from typing import Dict, Any


@dataclass(frozen=True)
class GitHubActionInputs:
    class _RequiredType(str):
        pass

    REQUIRED = _RequiredType()

    build_directory_path: str = dataclasses.field(
        default="_site",
        metadata={
            "description": "Path to a directory where the generated static assets (CSS, HTML, JavaScript) should be placed"
        },
    )

    data_file_paths: str = dataclasses.field(
        default="",
        metadata={"description": "Colon-separated paths to one or more data files"},
    )

    debug: str = dataclasses.field(
        default="", metadata={"description": "Debug the action"}
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
                GitHubActionInputs.REQUIRED
            )
            fields_yaml[field.name] = {
                key: field_yaml[key] for key in sorted(field_yaml.keys())
            }
        return fields_yaml

    def __post_init__(self):
        for field in dataclasses.fields(self):
            if id(field.default) != id(GitHubActionInputs.REQUIRED):
                continue
            value = getattr(self, field.name)
            if not value.strip():
                raise ValueError("empty/blank " + field.name)
