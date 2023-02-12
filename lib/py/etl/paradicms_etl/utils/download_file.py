import logging
from pathlib import Path
from urllib.request import urlopen

from pathvalidate import sanitize_filename

logger = logging.getLogger(__name__)


def download_file(
    self, *, extracted_data_dir_path: Path, from_url: str, force: bool = False
) -> Path:
    """
    Utility method to download a file from a URL to a local file path.
    """
    file_path = extracted_data_dir_path / sanitize_filename(from_url)
    if not force and file_path.exists():
        logger.info(
            "%s already downloaded to %s and force not specified, skipping download",
            from_url,
            file_path,
        )
        return file_path

    self._logger.info("downloading %s to %s", from_url, file_path)
    try:
        url_ = urlopen(from_url)
        url_contents = url_.read()
    finally:
        url_.close()
    with open(file_path, "w+b") as file_:
        file_.write(url_contents)
    self._logger.info("downloaded %s", from_url)
    return file_path
