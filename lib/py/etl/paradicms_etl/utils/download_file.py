import logging
from pathlib import Path
from typing import Optional
from urllib.request import urlretrieve, urlopen

from pathvalidate import sanitize_filename

logger = logging.getLogger(__name__)


def download_file(
    *,
    from_url: str,
    atomic: bool = True,
    force: bool = False,
    to_file_extension: Optional[str] = None,
    to_file_path: Optional[Path] = None,
    to_dir_path: Optional[Path] = None,
) -> Path:
    """
    Utility method to download a file from a URL to a local file path.
    """

    if to_file_path is None:
        if to_dir_path is None:
            raise ValueError("must specify to_dir_path if to_file_path not specified")
        to_file_name = str(sanitize_filename(from_url))
        if to_file_extension is not None:
            to_file_name += to_file_extension
        to_file_path = to_dir_path / to_file_name

    if not force and to_file_path.exists():
        logger.info(
            "%s already downloaded to %s and force not specified, skipping download",
            from_url,
            to_file_path,
        )
        return to_file_path

    logger.info("downloading %s to %s", from_url, to_file_path)
    if atomic:
        temp_file_path, _ = urlretrieve(from_url)
        logger.debug("downloaded %s to %s", from_url, temp_file_path)
        to_file_path.unlink(missing_ok=True)
        to_file_path.parent.mkdir(exist_ok=True, parents=True)
        Path(temp_file_path).rename(to_file_path)
        logger.debug("renamed %s to %s", temp_file_path, to_file_path)
    else:
        with urlopen(from_url) as open_from_url:
            to_file_path.unlink(missing_ok=True)
            with open(to_file_path, "w+b") as to_file:
                to_file.write(open_from_url.read())

    return to_file_path
