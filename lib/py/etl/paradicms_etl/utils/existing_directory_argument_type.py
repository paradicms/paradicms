from pathlib import Path


def existing_directory_argument_type(value: str) -> Path:
    dir_path = Path(value)
    if not dir_path.is_dir():
        raise ValueError(f"{value} is not a directory")
    return dir_path.absolute()
