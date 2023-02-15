from pathlib import Path
from typing import Protocol


class Deployer(Protocol):
    def __call__(self, *, app_out_dir_path: Path) -> None:
        """
        Deploy a previously-built app.

        :param app_out_dir_path: path to the Next.js "out" directory produced by a build + export.
        """
