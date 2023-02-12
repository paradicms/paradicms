import logging
from pathlib import Path
from typing import Optional
from urllib.request import urlretrieve

from pathvalidate import sanitize_filename

logger = logging.getLogger(__name__)


def download_file(
    *,
    downloaded_file_dir_path: Path,
    from_url: str,
    file_extension: Optional[str] = None,
    force: bool = False
) -> Path:
    """
    Utility method to download a file from a URL to a local file path.
    """

    downloaded_file_path = downloaded_file_dir_path / (
        sanitize_filename(from_url) + file_extension
        if file_extension is not None
        else ""
    )
    if not force and downloaded_file_path.exists():
        logger.info(
            "%s already downloaded to %s and force not specified, skipping download",
            from_url,
            downloaded_file_path,
        )
        return downloaded_file_path

    logger.info("downloading %s to %s", from_url, downloaded_file_path)
    temp_file_path, _ = urlretrieve(from_url)
    logger.debug("downloaded %s to %s", from_url, temp_file_path)
    Path(temp_file_path).rename(downloaded_file_path)
    logger.debug("renamed %s to %s", temp_file_path, downloaded_file_path)

    return downloaded_file_path
