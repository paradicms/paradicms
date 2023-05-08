import logging
from pathlib import Path
from typing import Iterable, Optional
from urllib.parse import urlparse

from bs4 import BeautifulSoup
from rdflib import URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image import Image
from paradicms_etl.utils.file_cache import FileCache


class WikimediaCommonsEnricher:
    __LICENSE_URIS_BY_ID = {
        "CC-BY-SA": CreativeCommonsLicenses.BY_SA_4_0.uri,
        "GFDL": None,
    }

    def __init__(self, *, cache_dir_path: Path):
        self.__file_cache = FileCache(cache_dir_path=cache_dir_path)
        self.__logger = logging.getLogger(__name__)

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        for model in models:
            if isinstance(model, Image):
                yield self.__enrich_image(model)
            else:
                yield model

    def __enrich_image(self, image: Image) -> Image:
        image_wikimedia_commons_file_url = self.__get_wikimedia_commons_file_url(image)
        if image_wikimedia_commons_file_url is None:
            return image
        with open(
            self.__file_cache.get_file(file_url=image_wikimedia_commons_file_url), "r"
        ) as wikimedia_commons_file_html_file:
            return self.__parse_wikimedia_commons_file_html(
                image,
                wikimedia_commons_file_html=wikimedia_commons_file_html_file.read(),
                wikimedia_commons_file_url=image_wikimedia_commons_file_url,
            )

    def __get_wikimedia_commons_file_url(self, image: Image) -> Optional[URIRef]:
        image_source = image.source
        if image_source is None:
            return None
        try:
            parsed_image_source = urlparse(str(image_source))
        except ValueError:
            return None
        if parsed_image_source.netloc != "commons.wikimedia.org":
            return None
        if not parsed_image_source.path.startswith("/wiki/File:"):
            return None
        return image_source

    def __parse_wikimedia_commons_file_html(
        self,
        image: Image,
        wikimedia_commons_file_html: str,
        wikimedia_commons_file_url: URIRef,
    ) -> Image:
        image_replacer = image.replacer()
        soup = BeautifulSoup(wikimedia_commons_file_html)
        commons_file_information_table = soup.find(
            class_="commons-file-information-table"
        )
        for (
            commons_file_information_table_row
        ) in commons_file_information_table.find_all(name="tr"):
            commons_file_information_table_cells = tuple(
                commons_file_information_table_row.find_all(name="td")
            )
            if len(commons_file_information_table_cells) != 2:
                continue
            key = commons_file_information_table_cells[0].text
            value_element = commons_file_information_table_cells[1]
            value_text = value_element.text.strip()
            if key == "Author":
                if image.creators:
                    self.__logger.info(
                        "image %s: already has a creator(s), ignoring information from Wikimedia Commons file HTML (%s)",
                        image.uri,
                        wikimedia_commons_file_url,
                    )
                    continue
                self.__logger.debug(
                    "image %s: adding creator %s from Wikimedia Commons file HTML (%s)",
                    image.uri,
                    value_text,
                    wikimedia_commons_file_url,
                )
                image_replacer.add_creator(value_text)
            elif key == "Date":
                time_value_element = value_element.find("time")
                if not time_value_element:
                    continue
                datetime_attr = time_value_element.get("datetime")
                if not datetime_attr:
                    continue
                self.__logger.info(
                    "image %s: Wikimedia Commons file HTML (%s) datetime: %s",
                    image.uri,
                    wikimedia_commons_file_url,
                    datetime_attr,
                )
            elif key.startswith("Description"):
                pass
            elif key == "Permission(Reusing this file)":
                if image.license:
                    self.__logger.info(
                        "image %s: already has a license(s), ignoring information from Wikimedia Commons file HTML (%s)",
                        image.uri,
                        wikimedia_commons_file_url,
                    )
                    continue

                for license_id in value_text.split():
                    try:
                        license_uri = self.__LICENSE_URIS_BY_ID[license_id]
                    except KeyError:
                        self.__logger.warning(
                            "image %s: Wikimedia Commons file HTML (%s) has unknown license: %s",
                            image.uri,
                            wikimedia_commons_file_url,
                            license_id,
                        )
                        continue
                    self.__logger.debug(
                        "image %s: Wikimedia Commons file HTML (%s) license: %s -> %s",
                        image.uri,
                        wikimedia_commons_file_url,
                        license_id,
                        license_uri,
                    )
                    if license_uri is not None:
                        image_replacer.add_license(license_uri)
            elif key == "Source":
                pass
            else:
                self.__logger.warning(
                    "image %s: Wikimedia commons file HTML (%s): unhandled key (%s) = value (%s)",
                    image.uri,
                    wikimedia_commons_file_url,
                    key,
                    value_text,
                )
        return image_replacer.build()
