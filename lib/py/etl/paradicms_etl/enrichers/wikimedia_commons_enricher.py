import logging
from pathlib import Path
from typing import Iterable

from paradicms_etl.model import Model


class WikimediaCommonsEnricher:
    def __init__(self, *, cache_dir_path: Path):
        self.__cache_dir_path = cache_dir_path
        self.__logger = logging.getLogger(__name__)

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        yield from models
